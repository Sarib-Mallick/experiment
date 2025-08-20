import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { Experiment, ExperimentState, ExperimentProgress } from '../types/experiment'

interface ExperimentContextType {
  currentExperiment: Experiment | null
  experimentState: ExperimentState
  progress: ExperimentProgress | null
  setCurrentExperiment: (experiment: Experiment | null) => void
  startExperiment: () => void
  pauseExperiment: () => void
  resumeExperiment: () => void
  resetExperiment: () => void
  nextStep: () => void
  previousStep: () => void
  goToStep: (step: number) => void
  toggleTheory: () => void
  toggleObservations: () => void
  toggleQuestions: () => void
  submitAnswer: (questionId: string, answer: string | number) => void
  completeStep: (step: number) => void
  saveProgress: () => void
}

const ExperimentContext = createContext<ExperimentContextType | undefined>(undefined)

// Initial state
const initialState: ExperimentState = {
  currentStep: 0,
  isRunning: false,
  isPaused: false,
  showTheory: false,
  showObservations: false,
  showQuestions: false,
  userAnswers: {},
  timeElapsed: 0,
  completedSteps: []
}

// Action types
type ExperimentAction =
  | { type: 'SET_CURRENT_EXPERIMENT'; payload: Experiment | null }
  | { type: 'START_EXPERIMENT' }
  | { type: 'PAUSE_EXPERIMENT' }
  | { type: 'RESUME_EXPERIMENT' }
  | { type: 'RESET_EXPERIMENT' }
  | { type: 'NEXT_STEP' }
  | { type: 'PREVIOUS_STEP' }
  | { type: 'GO_TO_STEP'; payload: number }
  | { type: 'TOGGLE_THEORY' }
  | { type: 'TOGGLE_OBSERVATIONS' }
  | { type: 'TOGGLE_QUESTIONS' }
  | { type: 'SUBMIT_ANSWER'; payload: { questionId: string; answer: string | number } }
  | { type: 'COMPLETE_STEP'; payload: number }
  | { type: 'UPDATE_TIME'; payload: number }
  | { type: 'LOAD_PROGRESS'; payload: ExperimentProgress }

// Reducer
function experimentReducer(state: ExperimentState, action: ExperimentAction): ExperimentState {
  switch (action.type) {
    case 'SET_CURRENT_EXPERIMENT':
      return {
        ...initialState,
        currentStep: 0
      }
    
    case 'START_EXPERIMENT':
      return {
        ...state,
        isRunning: true,
        isPaused: false,
        timeElapsed: 0
      }
    
    case 'PAUSE_EXPERIMENT':
      return {
        ...state,
        isPaused: true
      }
    
    case 'RESUME_EXPERIMENT':
      return {
        ...state,
        isPaused: false
      }
    
    case 'RESET_EXPERIMENT':
      return {
        ...initialState,
        currentStep: 0
      }
    
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, 999) // Prevent overflow
      }
    
    case 'PREVIOUS_STEP':
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 0)
      }
    
    case 'GO_TO_STEP':
      return {
        ...state,
        currentStep: action.payload
      }
    
    case 'TOGGLE_THEORY':
      return {
        ...state,
        showTheory: !state.showTheory
      }
    
    case 'TOGGLE_OBSERVATIONS':
      return {
        ...state,
        showObservations: !state.showObservations
      }
    
    case 'TOGGLE_QUESTIONS':
      return {
        ...state,
        showQuestions: !state.showQuestions
      }
    
    case 'SUBMIT_ANSWER':
      return {
        ...state,
        userAnswers: {
          ...state.userAnswers,
          [action.payload.questionId]: action.payload.answer
        }
      }
    
    case 'COMPLETE_STEP':
      return {
        ...state,
        completedSteps: [...new Set([...state.completedSteps, action.payload])]
      }
    
    case 'UPDATE_TIME':
      return {
        ...state,
        timeElapsed: action.payload
      }
    
    case 'LOAD_PROGRESS':
      return {
        ...state,
        currentStep: action.payload.completedSteps[action.payload.completedSteps.length - 1] || 0,
        completedSteps: action.payload.completedSteps,
        userAnswers: action.payload.answers,
        timeElapsed: action.payload.timeSpent
      }
    
    default:
      return state
  }
}

export function ExperimentProvider({ children }: { children: React.ReactNode }) {
  const [currentExperiment, setCurrentExperiment] = React.useState<Experiment | null>(null)
  const [experimentState, dispatch] = useReducer(experimentReducer, initialState)
  const [progress, setProgress] = React.useState<ExperimentProgress | null>(null)

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    
    if (experimentState.isRunning && !experimentState.isPaused) {
      interval = setInterval(() => {
        dispatch({ type: 'UPDATE_TIME', payload: experimentState.timeElapsed + 1 })
      }, 1000)
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [experimentState.isRunning, experimentState.isPaused, experimentState.timeElapsed])

  // Load progress from localStorage when experiment changes
  useEffect(() => {
    if (currentExperiment) {
      const savedProgress = localStorage.getItem(`experiment-progress-${currentExperiment.id}`)
      if (savedProgress) {
        try {
          const parsedProgress: ExperimentProgress = JSON.parse(savedProgress)
          setProgress(parsedProgress)
          dispatch({ type: 'LOAD_PROGRESS', payload: parsedProgress })
        } catch (error) {
          console.error('Failed to load experiment progress:', error)
        }
      }
    }
  }, [currentExperiment])

  const startExperiment = () => dispatch({ type: 'START_EXPERIMENT' })
  const pauseExperiment = () => dispatch({ type: 'PAUSE_EXPERIMENT' })
  const resumeExperiment = () => dispatch({ type: 'RESUME_EXPERIMENT' })
  const resetExperiment = () => dispatch({ type: 'RESET_EXPERIMENT' })
  const nextStep = () => dispatch({ type: 'NEXT_STEP' })
  const previousStep = () => dispatch({ type: 'PREVIOUS_STEP' })
  const goToStep = (step: number) => dispatch({ type: 'GO_TO_STEP', payload: step })
  const toggleTheory = () => dispatch({ type: 'TOGGLE_THEORY' })
  const toggleObservations = () => dispatch({ type: 'TOGGLE_OBSERVATIONS' })
  const toggleQuestions = () => dispatch({ type: 'TOGGLE_QUESTIONS' })
  const submitAnswer = (questionId: string, answer: string | number) => 
    dispatch({ type: 'SUBMIT_ANSWER', payload: { questionId, answer } })
  const completeStep = (step: number) => dispatch({ type: 'COMPLETE_STEP', payload: step })

  const saveProgress = () => {
    if (currentExperiment) {
      const newProgress: ExperimentProgress = {
        experimentId: currentExperiment.id,
        completed: experimentState.completedSteps.length >= currentExperiment.procedure.length,
        timeSpent: experimentState.timeElapsed,
        lastAccessed: new Date().toISOString(),
        completedSteps: experimentState.completedSteps,
        answers: experimentState.userAnswers
      }
      
      setProgress(newProgress)
      localStorage.setItem(`experiment-progress-${currentExperiment.id}`, JSON.stringify(newProgress))
    }
  }

  const value: ExperimentContextType = {
    currentExperiment,
    experimentState,
    progress,
    setCurrentExperiment,
    startExperiment,
    pauseExperiment,
    resumeExperiment,
    resetExperiment,
    nextStep,
    previousStep,
    goToStep,
    toggleTheory,
    toggleObservations,
    toggleQuestions,
    submitAnswer,
    completeStep,
    saveProgress
  }

  return (
    <ExperimentContext.Provider value={value}>
      {children}
    </ExperimentContext.Provider>
  )
}

export function useExperiment() {
  const context = useContext(ExperimentContext)
  if (context === undefined) {
    throw new Error('useExperiment must be used within an ExperimentProvider')
  }
  return context
}