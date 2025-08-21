import React, { useState, useEffect, Suspense } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Pause, 
  RotateCcw, 
  SkipBack, 
  SkipForward,
  BookOpen,
  Eye,
  HelpCircle,
  CheckCircle,
  Clock,
  Target,
  AlertTriangle,
  ArrowLeft,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Settings,
  Save,
  Loader
} from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { useExperiment } from '../contexts/ExperimentContext'
import { allExperiments } from '../data/experiments'
import { cn } from '../utils/cn'

// 3D Components for different experiments
const AcidBaseTitration3D: React.FC = () => {
  return (
    <group>
      {/* Burette */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 3, 32]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>
      
      {/* Conical Flask */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.8, 0.4, 1.5, 32]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
      </mesh>
      
      {/* Liquid in flask */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.7, 0.3, 1, 32]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
      </mesh>
      
      {/* Burette stand */}
      <mesh position={[0, 3.5, 0]}>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>
    </group>
  )
}

const SimplePendulum3D: React.FC = () => {
  const [time, setTime] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.05)
    }, 50)
    return () => clearInterval(interval)
  }, [])
  
  const angle = Math.sin(time) * 0.3 // Small angle oscillation
  
  return (
    <group>
      {/* Support */}
      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[2, 0.2, 0.2]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>
      
      {/* String */}
      <mesh position={[Math.sin(angle) * 2, 1.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 3, 8]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      
      {/* Bob */}
      <mesh position={[Math.sin(angle) * 2, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
    </group>
  )
}

const OhmsLaw3D: React.FC = () => {
  return (
    <group>
      {/* Battery */}
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[0.5, 1, 0.3]} />
        <meshStandardMaterial color="#10b981" />
      </mesh>
      
      {/* Resistor */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.8, 32]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
      
      {/* Wires */}
      <mesh position={[-1, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      
      <mesh position={[1, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      
      {/* Ammeter */}
      <mesh position={[-0.5, 0.5, 0]}>
        <boxGeometry args={[0.3, 0.2, 0.2]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      
      {/* Voltmeter */}
      <mesh position={[0.5, 0.5, 0]}>
        <boxGeometry args={[0.3, 0.2, 0.2]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
    </group>
  )
}

const SaltAnalysis3D: React.FC = () => {
  return (
    <group>
      {/* Test tubes */}
      {[0, 1, 2].map((i) => (
        <group key={i} position={[i * 1.5 - 1.5, 0, 0]}>
          <mesh>
            <cylinderGeometry args={[0.2, 0.2, 2, 32]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
          </mesh>
          
          {/* Different colored solutions */}
          <mesh position={[0, -0.5, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 1, 32]} />
            <meshStandardMaterial color={['#3b82f6', '#10b981', '#f59e0b'][i]} transparent opacity={0.6} />
          </mesh>
        </group>
      ))}
      
      {/* Bunsen burner */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.5, 32]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>
    </group>
  )
}

const ExperimentViewer: React.FC = () => {
  const { subject, experimentId } = useParams<{ subject: string; experimentId: string }>()
  const { 
    currentExperiment, 
    setCurrentExperiment, 
    experimentState, 
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
  } = useExperiment()

  const [activeTab, setActiveTab] = useState<'procedure' | 'theory' | 'observations' | 'questions'>('procedure')
  const [show3D, setShow3D] = useState(true)
  const [cameraPosition, setCameraPosition] = useState([5, 5, 5])

  // Find experiment data
  useEffect(() => {
    const experiment = allExperiments.find(exp => exp.id === experimentId)
    if (experiment) {
      setCurrentExperiment(experiment)
    }
  }, [experimentId, setCurrentExperiment])

  if (!currentExperiment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p>Loading experiment...</p>
        </div>
      </div>
    )
  }

  const currentStepData = currentExperiment.procedure[experimentState.currentStep]
  const isLastStep = experimentState.currentStep === currentExperiment.procedure.length - 1
  const isFirstStep = experimentState.currentStep === 0

  // Get 3D component based on experiment
  const get3DComponent = () => {
    switch (currentExperiment.id) {
      case 'acid-base-titration':
        return <AcidBaseTitration3D />
      case 'simple-pendulum':
        return <SimplePendulum3D />
      case 'ohms-law':
        return <OhmsLaw3D />
      case 'salt-analysis':
        return <SaltAnalysis3D />
      default:
        return <AcidBaseTitration3D />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to={`/${subject}`}
                className="btn btn-ghost flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {subject}
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {currentExperiment.title}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Class {currentExperiment.class} • {currentExperiment.chapter}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShow3D(!show3D)}
                className="btn btn-secondary"
              >
                {show3D ? <Eye className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {show3D ? 'Hide' : 'Show'} 3D
              </button>
              <button
                onClick={saveProgress}
                className="btn btn-primary"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Progress
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel - 3D View */}
        {show3D && (
          <div className="w-1/2 bg-black">
            <Canvas>
              <Suspense fallback={null}>
                <PerspectiveCamera makeDefault position={cameraPosition} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                <Environment preset="studio" />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                {get3DComponent()}
              </Suspense>
            </Canvas>
            
            {/* 3D Controls */}
            <div className="absolute bottom-4 left-4 flex space-x-2">
              <button
                onClick={() => setCameraPosition([5, 5, 5])}
                className="p-2 bg-white/20 rounded-lg text-white hover:bg-white/30"
                title="Reset View"
              >
                <RotateCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCameraPosition([10, 10, 10])}
                className="p-2 bg-white/20 rounded-lg text-white hover:bg-white/30"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCameraPosition([2, 2, 2])}
                className="p-2 bg-white/20 rounded-lg text-white hover:bg-white/30"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Right Panel - Content */}
        <div className={cn(
          "flex-1 overflow-y-auto",
          show3D ? "w-1/2" : "w-full"
        )}>
          {/* Experiment Controls */}
          <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={experimentState.isRunning ? pauseExperiment : resumeExperiment}
                  className="btn btn-primary"
                  disabled={!experimentState.isRunning && experimentState.currentStep === 0}
                >
                  {experimentState.isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {experimentState.isRunning ? 'Pause' : 'Start'}
                </button>
                
                <button
                  onClick={resetExperiment}
                  className="btn btn-secondary"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Step {experimentState.currentStep + 1} of {currentExperiment.procedure.length}</span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((experimentState.currentStep + 1) / currentExperiment.procedure.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <button
                onClick={previousStep}
                disabled={isFirstStep}
                className="btn btn-secondary disabled:opacity-50"
              >
                <SkipBack className="w-4 h-4 mr-2" />
                Previous
              </button>
              
              <div className="flex space-x-2">
                {currentExperiment.procedure.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={cn(
                      "w-8 h-8 rounded-full text-sm font-medium transition-all",
                      index === experimentState.currentStep
                        ? "bg-blue-600 text-white"
                        : index < experimentState.currentStep
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                    )}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <button
                onClick={nextStep}
                disabled={isLastStep}
                className="btn btn-secondary disabled:opacity-50"
              >
                Next
                <SkipForward className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex">
              {[
                { id: 'procedure', label: 'Procedure', icon: Target },
                { id: 'theory', label: 'Theory', icon: BookOpen },
                { id: 'observations', label: 'Observations', icon: Eye },
                { id: 'questions', label: 'Questions', icon: HelpCircle }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "flex items-center px-6 py-3 text-sm font-medium border-b-2 transition-colors",
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600 dark:text-blue-400"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  )}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeTab === 'procedure' && (
                <motion.div
                  key="procedure"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {currentStepData && (
                    <>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          Step {currentStepData.step}: {currentStepData.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {currentStepData.description}
                        </p>
                        {currentStepData.notes && (
                          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                            <div className="flex items-start">
                              <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                              <p className="text-blue-800 dark:text-blue-200 text-sm">
                                {currentStepData.notes}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {currentStepData.interactive && (
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                            <p className="text-green-800 dark:text-green-200 text-sm">
                              This step is interactive. Use the 3D view to perform the action.
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
              )}

              {activeTab === 'theory' && (
                <motion.div
                  key="theory"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Theory
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {currentExperiment.theory.overview}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Principles
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                      {currentExperiment.theory.principles.map((principle, index) => (
                        <li key={index}>{principle}</li>
                      ))}
                    </ul>
                    
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Important Formulas
                    </h4>
                    <div className="space-y-4">
                      {currentExperiment.theory.formulas.map((formula, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {formula.name}
                          </h5>
                          <div className="bg-white dark:bg-gray-700 rounded p-3 font-mono text-center text-lg">
                            {formula.expression}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mt-2">
                            {formula.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'observations' && (
                <motion.div
                  key="observations"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Expected Observations
                    </h3>
                    <div className="space-y-4">
                      {currentExperiment.observations.map((observation, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Step {observation.step}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">
                            {observation.description}
                          </p>
                          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-3">
                            <p className="text-green-800 dark:text-green-200 text-sm">
                              <strong>Expected Result:</strong> {observation.expectedResult}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'questions' && (
                <motion.div
                  key="questions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Practice Questions
                    </h3>
                    <div className="space-y-6">
                      {currentExperiment.questions.map((question, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Question {index + 1}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {question.question}
                          </p>
                          
                          {question.type === 'multiple-choice' && question.options && (
                            <div className="space-y-2">
                              {question.options.map((option, optIndex) => (
                                <label key={optIndex} className="flex items-center">
                                  <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={option}
                                    onChange={(e) => submitAnswer(question.id, e.target.value)}
                                    className="mr-2"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          )}
                          
                          {question.type === 'numerical' && (
                            <input
                              type="number"
                              placeholder="Enter your answer"
                              onChange={(e) => submitAnswer(question.id, parseFloat(e.target.value) || 0)}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                          )}
                          
                          {question.type === 'short-answer' && (
                            <input
                              type="text"
                              placeholder="Enter your answer"
                              onChange={(e) => submitAnswer(question.id, e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                          )}
                          
                          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
                            <p className="text-blue-800 dark:text-blue-200 text-sm">
                              <strong>Explanation:</strong> {question.explanation}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperimentViewer