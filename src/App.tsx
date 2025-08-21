import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ChemistryPage from './pages/ChemistryPage'
import PhysicsPage from './pages/PhysicsPage'
import ExperimentViewer from './components/ExperimentViewer'
import { ExperimentProvider } from './contexts/ExperimentContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { cn } from './utils/cn'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Loading Virtual Lab</h2>
          <p className="text-gray-500">Preparing your 3D laboratory experience...</p>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <ExperimentProvider>
        <Router>
          <div className={cn(
            "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50",
            "transition-colors duration-300"
          )}>
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chemistry" element={<ChemistryPage />} />
                <Route path="/physics" element={<PhysicsPage />} />
                <Route path="/experiment/:subject/:experimentId" element={<ExperimentViewer />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ExperimentProvider>
    </ThemeProvider>
  )
}

export default App