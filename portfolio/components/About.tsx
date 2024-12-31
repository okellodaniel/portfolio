import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-8">
            A software craftsman with focus on machine learning. I bring data science ideas from early prototypes to production.
            This includes problem identification, data collection, model creation, deployment and maintanance
          </p>
          <div className="flex justify-center space-x-4">
            <img
              src="/profile.jpg?height=150&width=150"
              alt="Jane Doe"
              className="w-32 h-32 rounded-full border-4 border-blue-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

