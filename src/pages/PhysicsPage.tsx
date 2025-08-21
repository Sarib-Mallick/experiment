import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Filter, 
  Search, 
  Clock, 
  Target, 
  BookOpen,
  ArrowRight,
  Star,
  TrendingUp,
  Award
} from 'lucide-react'
import { physicsExperiments } from '../data/experiments'
import { cn } from '../utils/cn'

const PhysicsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedClass, setSelectedClass] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [selectedChapter, setSelectedChapter] = useState<string>('all')

  // Get unique chapters and classes for filters
  const chapters = useMemo(() => {
    const uniqueChapters = [...new Set(physicsExperiments.map(exp => exp.chapter))]
    return uniqueChapters.sort()
  }, [])

  const classes = useMemo(() => {
    const uniqueClasses = [...new Set(physicsExperiments.map(exp => exp.class))]
    return uniqueClasses.sort()
  }, [])

  // Filter experiments
  const filteredExperiments = useMemo(() => {
    return physicsExperiments.filter(experiment => {
      const matchesSearch = experiment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           experiment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           experiment.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesClass = selectedClass === 'all' || experiment.class === selectedClass
      const matchesDifficulty = selectedDifficulty === 'all' || experiment.difficulty === selectedDifficulty
      const matchesChapter = selectedChapter === 'all' || experiment.chapter === selectedChapter

      return matchesSearch && matchesClass && matchesDifficulty && matchesChapter
    })
  }, [searchTerm, selectedClass, selectedDifficulty, selectedChapter])

  const stats = [
    { label: 'Total Experiments', value: physicsExperiments.length, icon: Zap },
    { label: 'Class 11', value: physicsExperiments.filter(e => e.class === '11').length, icon: BookOpen },
    { label: 'Class 12', value: physicsExperiments.filter(e => e.class === '12').length, icon: Award },
    { label: 'Interactive', value: physicsExperiments.filter(e => e.procedure.some(p => p.interactive)).length, icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Physics Experiments
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Explore NCERT Physics experiments with interactive 3D simulations. 
              From simple pendulum to Ohm's law, understand fundamental concepts through hands-on virtual learning.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 mx-auto">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search experiments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Class Filter */}
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Classes</option>
                {classes.map(cls => (
                  <option key={cls} value={cls}>Class {cls}</option>
                ))}
              </select>

              {/* Difficulty Filter */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Difficulties</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>

              {/* Chapter Filter */}
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Chapters</option>
                {chapters.map(chapter => (
                  <option key={chapter} value={chapter}>{chapter}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Experiments Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredExperiments.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Zap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No experiments found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredExperiments.map((experiment, index) => (
                <motion.div
                  key={experiment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Experiment Image */}
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center">
                    <Zap className="w-16 h-16 text-purple-600 dark:text-purple-400" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {experiment.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                          {experiment.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                        Class {experiment.class}
                      </span>
                      <span className={cn(
                        "px-2 py-1 text-xs rounded-full",
                        experiment.difficulty === 'beginner' && "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
                        experiment.difficulty === 'intermediate' && "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
                        experiment.difficulty === 'advanced' && "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                      )}>
                        {experiment.difficulty.charAt(0).toUpperCase() + experiment.difficulty.slice(1)}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        {experiment.chapter}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {experiment.duration} min
                      </div>
                      <div className="flex items-center">
                        <Target className="w-4 h-4 mr-1" />
                        {experiment.objectives.length} objectives
                      </div>
                    </div>

                    {/* Action */}
                    <Link
                      to={`/experiment/physics/${experiment.id}`}
                      className="w-full btn btn-primary flex items-center justify-center group-hover:scale-105 transition-transform"
                    >
                      Start Experiment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Master Physics?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Start with any experiment and learn at your own pace. 
              Our interactive 3D simulations make complex physics concepts easy to understand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/experiment/physics/simple-pendulum"
                className="btn bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start with Simple Pendulum
              </Link>
              <Link
                to="/chemistry"
                className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg px-8 py-4"
              >
                Explore Chemistry Experiments
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PhysicsPage