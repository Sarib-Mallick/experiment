import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Beaker, 
  Zap, 
  Play, 
  BookOpen, 
  Target, 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  TrendingUp
} from 'lucide-react'
import { cn } from '../utils/cn'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Beaker,
      title: 'Chemistry Experiments',
      description: 'Interactive 3D visualizations of chemical reactions, titrations, and qualitative analysis.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Physics Experiments',
      description: 'Real-time simulations of mechanics, optics, electricity, and wave phenomena.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'NCERT Curriculum',
      description: 'Aligned with Class 11 & 12 NCERT syllabus for accurate learning outcomes.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Learn proper safety procedures and best practices for laboratory work.',
      color: 'from-red-500 to-orange-500'
    }
  ]

  const stats = [
    { label: 'Experiments', value: '50+', icon: Beaker },
    { label: 'Students Helped', value: '10K+', icon: Users },
    { label: 'Success Rate', value: '95%', icon: Award },
    { label: 'Free Forever', value: '100%', icon: Star }
  ]

  const benefits = [
    'No expensive lab equipment required',
    'Learn at your own pace',
    'Repeat experiments unlimited times',
    'Visual feedback and explanations',
    'Progress tracking and assessments',
    'Mobile-friendly responsive design'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Master NCERT Experiments with{' '}
                <span className="text-gradient">3D Interactive</span> Learning
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Experience laboratory experiments like never before. Professional 3D visualizations, 
                step-by-step guidance, and interactive controls for NCERT Class 11 & 12 Physics and Chemistry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/chemistry"
                  className="btn btn-primary text-lg px-8 py-4 flex items-center justify-center"
                >
                  <Beaker className="w-5 h-5 mr-2" />
                  Start Chemistry
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/physics"
                  className="btn btn-secondary text-lg px-8 py-4 flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Explore Physics
                </Link>
              </div>
            </motion.div>

            {/* 3D Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center animate-float">
                      <Beaker className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      3D Interactive Lab
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Rotate, zoom, and interact with experiments
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <Play className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Virtual Lab?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional-grade 3D simulations designed specifically for NCERT curriculum, 
              helping students master experiments without expensive equipment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br",
                  feature.color
                )}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Perfect for Students Without Lab Access
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our virtual laboratory bridges the gap between theory and practice, 
                providing hands-on experience through advanced 3D simulations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Learning Progress</h3>
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Chemistry Experiments</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Physics Experiments</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already mastering NCERT experiments 
              with our interactive 3D virtual laboratory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/chemistry"
                className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                <Beaker className="w-5 h-5 mr-2" />
                Start Learning Chemistry
              </Link>
              <Link
                to="/physics"
                className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg px-8 py-4"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore Physics
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage