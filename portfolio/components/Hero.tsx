import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  const name = "Daniel Okello".split("")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="flex items-center py-20 md:py-32 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-bold mb-6 flex flex-wrap"
            >
              {name.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="hover:text-blue-200 transition-colors duration-300 inline-block"
                  style={{ marginRight: letter === " " ? "0.5rem" : "0.1rem" }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-xl md:text-2xl mb-8 font-light"
            >
              Software Craftsman
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex space-x-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                <a href="#contact">
                  Get in touch <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-blue-600 border-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/cv">
                  View resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 md:mt-0"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/profile.jpg?height=300&width=300"
              alt="Daniel Okello"
              className="w-72 h-72 rounded-full border-4 border-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}