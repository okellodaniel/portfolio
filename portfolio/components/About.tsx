'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-8" />
          <p className="text-gray-300 text-lg">
            A software craftsman with focus on machine learning. I bring data science ideas from early prototypes to production.
            This includes problem identification, data collection, model creation, deployment and maintanance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">My Expertise</h3>
            <div className="space-y-4">
              {[
                'Data Science & Machine Learning',
                'Data Engineering',
                'API Development & Integration',
                'Database Architecture',
                'Cloud & Onpremise Deployment',
                'Performance Optimization'
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-500" />
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white">API Development & Integration</span>
                  <span className="text-red-500">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white">Backend Development</span>
                  <span className="text-red-500">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white">Data Science & Machine Learning</span>
                  <span className="text-red-500">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '80%' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

