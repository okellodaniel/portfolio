'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Globe, Rocket, Database, LineChart } from 'lucide-react'

const services = [
    {
        icon: Code2,
        title: 'Model Development',
        description: 'Building robust machine learning models.'
    },
    {
        icon: Database,
        title: 'Data Pipeline Development',
        description: 'Creating robust data pipelines to scale with your business needs.'
    },
    {
        icon: Palette,
        title: ' Design',
        description: 'Designing intuitive and engaging data journies that provide data insights.'
    },
    {
        icon: Globe,
        title: 'Backed Development',
        description: 'Seamlessly connecting your applications with third-party services and APIs.'
    },
    {
        icon: Rocket,
        title: 'Performance Optimization',
        description: 'Improving application speed and efficiency for better user engagement.'
    },
    {
        icon: LineChart,
        title: 'Technical Support',
        description: 'Providing support on technology platforms and bug resolution strategies.'
    }
]

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Specialities</h2>
                    <div className="w-20 h-1 bg-red-500 mx-auto mb-8" />
                    <p className="text-gray-300 text-lg">
                        My skillset spans a comprehensive range of specialities to help your business succeed in the digital technology landscape.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-900 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <service.icon className="h-12 w-12 text-red-500 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

