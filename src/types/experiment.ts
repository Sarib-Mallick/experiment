export interface Experiment {
  id: string
  title: string
  description: string
  subject: 'physics' | 'chemistry'
  class: '11' | '12'
  chapter: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: number // in minutes
  objectives: string[]
  materials: Material[]
  procedure: ProcedureStep[]
  theory: TheorySection
  safetyNotes: string[]
  observations: Observation[]
  conclusions: string[]
  questions: Question[]
  tags: string[]
  thumbnail: string
  videoUrl?: string
  references: string[]
  createdAt: string
  updatedAt: string
}

export interface Material {
  name: string
  quantity: string
  description?: string
  image?: string
}

export interface ProcedureStep {
  step: number
  title: string
  description: string
  image?: string
  animation?: string
  duration: number // in seconds
  interactive: boolean
  notes?: string
}

export interface TheorySection {
  overview: string
  principles: string[]
  formulas: Formula[]
  concepts: Concept[]
  realWorldApplications: string[]
}

export interface Formula {
  name: string
  expression: string
  description: string
  units: string
  variables: Variable[]
}

export interface Variable {
  symbol: string
  name: string
  unit: string
  description: string
}

export interface Concept {
  name: string
  description: string
  examples: string[]
}

export interface Observation {
  step: number
  description: string
  expectedResult: string
  actualResult?: string
  notes?: string
}

export interface Question {
  id: string
  question: string
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'numerical'
  options?: string[]
  correctAnswer: string | number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface ExperimentState {
  currentStep: number
  isRunning: boolean
  isPaused: boolean
  showTheory: boolean
  showObservations: boolean
  showQuestions: boolean
  userAnswers: Record<string, string | number>
  timeElapsed: number
  completedSteps: number[]
}

export interface ExperimentProgress {
  experimentId: string
  completed: boolean
  score?: number
  timeSpent: number
  lastAccessed: string
  completedSteps: number[]
  answers: Record<string, string | number>
}