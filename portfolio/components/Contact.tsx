'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-8" />
          <p className="text-gray-300 text-lg">
            Have a project in mind? Let's work together to create something great
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-gray-400">handsdani@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">+(256)702507545</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <p className="text-gray-400">Kampala, Uganda</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Input
              placeholder="Your Name"
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Subject"
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
            />
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

