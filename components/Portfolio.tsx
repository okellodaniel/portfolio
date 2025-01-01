'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A full-featured online shopping platform with real-time inventory management',
        image: '/ecommerce.jpeg?height=400&width=600',
        tags: ['NextJs', 'Stripe', 'Prisma'],
        liveUrl: 'https://e-12qup8z0t-okellodaniel.vercel.app',
        githubUrl: 'https://github.com/okellodaniel/e-cuk-cms'
    },
    {
        title: 'Cardio Vascular Disease Prediction',
        description: 'A machine learning based project for predicting the likelihood of a patient contracting cardio vascular disease',
        image: '/cardio.jpeg?height=400&width=600',
        tags: ['FastAPI', 'Python', 'PostgreSQL'],
        liveUrl: 'https://cardio-vasicular-disease-detector.fly.dev/',
        githubUrl: 'https://github.com/okellodaniel/cardio_vasicular_disease_detector'
    },
    {
        title: 'Account Applications Dashboard',
        description: 'A data engineering project with an Analytics dashboard for customer onboarding numbers in Uganda using AI generated data',
        image: '/report.png?height=400&width=600',
        tags: ['Mage', 'Python', 'BigQuery', 'Looker studio'],
        liveUrl: 'https://lookerstudio.google.com/u/0/reporting/80714f83-2281-4a3b-8f40-d262a0b1f614/page/WmtwD',
        githubUrl: 'https://github.com/okellodaniel/Account-applications-dashboard'
    }
]

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Portfolio</h2>
                    <div className="w-20 h-1 bg-red-500 mx-auto mb-8" />
                    <p className="text-gray-300 text-lg">
                        Check out some of my latest projects and achievements
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 rounded-lg overflow-hidden group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-red-500 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <Button size="icon" variant="ghost" className="text-white hover:text-gray-200" asChild>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="h-6 w-6" />
                                        </a>
                                    </Button>
                                    <Button size="icon" variant="ghost" className="text-white hover:text-gray-200" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-6 w-6" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}