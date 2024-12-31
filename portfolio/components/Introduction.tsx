'use client'

import { Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Introduction() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-6"
    >
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        src="/profile.jpg?height=150&width=150"
        alt="Profile Picture"
        className="rounded-full mx-auto w-32 h-32 border-4 border-primary shadow-lg"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Jane Doe</h1>
        <h2 className="text-2xl text-muted-foreground mt-2">Full Stack Developer</h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-2xl mx-auto text-lg"
      >
        Passionate about creating elegant solutions to complex problems. With 5 years of experience in web development,
        I specialize in React, Node.js, and cloud technologies.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex justify-center space-x-4"
      >
        <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
          <Github className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
          <Linkedin className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
          <Twitter className="h-5 w-5" />
        </Button>
      </motion.div>
    </motion.section>
  )
}

