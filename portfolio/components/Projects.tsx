import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    technologies: ['NextJs', 'MongoDB', 'Socket.io'],
    link: '#',
    image: '/placeholder.svg?height=200&width=400'
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task management application with team collaboration features.',
    technologies: ['React', 'Redux', 'Express', 'PostgreSQL'],
    link: '#',
    image: '/placeholder.svg?height=200&width=400'
  },
  {
    title: 'Weather Forecast Dashboard',
    description: 'A responsive weather dashboard with 5-day forecasts and location-based services.',
    technologies: ['React', 'OpenWeatherMap API', 'Geolocation API'],
    link: '#',
    image: '/placeholder.svg?height=200&width=400'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href={project.link}>View Project</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

