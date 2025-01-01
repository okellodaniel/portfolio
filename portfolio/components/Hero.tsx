'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-500 transform -skew-x-12 origin-top-right" />
      <div className="relative container mx-auto px-4 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Looking for a{' '}
              <span className="text-red-500">Developer</span>?
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              I&apos;m{' '}
              <span className="text-red-500">Daniel Okello</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
              With over 3 years of experience in enterprise software development, I&apos;ve worked with
              Laboremus Uganda, Valuer Space. Pushing the boundaries of web development
              with modern technologies and always on the edge of innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                <Link href="#contact">Hire me!</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-gray-900   border-white hover:bg-white/80 hover:text-white-900 w-36"
              >
                <Link href="/cv">
                  Resume
                </Link>
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-red-500">
                <img
                  src="/profile.jpg?height=400&width=400"
                  alt="Daniel Okello"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

