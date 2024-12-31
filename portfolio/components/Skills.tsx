import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Microsoft Azure', level: 85 },
  { name: 'SQL', level: 80 },
  { name: 'C#', level: 70 },
  { name: 'Docker', level: 65 },
  { name: 'React Native', level: 60 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium">{skill.name}</span>
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

