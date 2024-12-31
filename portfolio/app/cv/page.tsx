'use client';

import DownloadButton from './DownloadButton';
import Header from '@/components/Header';
import { useState } from 'react';

export default function CV() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 ${isDarkMode ? 'dark' : ''}`}>
          <div className="container mx-auto px-4 py-8">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
              <h1 className="text-3xl font-bold mb-6">Daniel Okello - Resume</h1>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
                <p>
                  Detail-oriented software support professional with 3+ years of experience in technical troubleshooting,
                  bug triage, and customer support. Proficient in Python, SQL, and cloud technologies (Azure, AWS)
                  with a strong focus on improving internal tools and operational efficiency. Skilled communicator with
                  both technical and non-technical stakeholders, passionate about enhancing product quality and user
                  experience through data-driven insights
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
                <div className="mb-4">
                  <h3 className="text-xl font-medium">Customer Success Engineer</h3>
                  <p className="text-gray-600 dark:text-gray-400">Laboremus Uganda | 2022 - Present</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Managed bug triage process, gathering details and escalating complex issues to
                      development</li>
                    <li>Maintained and updated FAQs on Confluence, reducing repeated inquiries by 30%</li>
                    <li>Analysed recurring issues, collaborating with product team to improve system stability</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-medium">Software Developer</h3>
                  <p className="text-gray-600 dark:text-gray-400">Valuer Space Inc. | 2022 - Present</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Led development of enterprise-level mobile applications using React Native and Python</li>
                    <li>Implemented microservices architecture, improving system scalability by 40%</li>
                    <li>Collaborated with stakeholders to align development strategies with technical needs,
                      improving end-user experience</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Junior Backend Engineer</h3>
                  <p className="text-gray-600 dark:text-gray-400">Renga Technologies – Kampala, Uganda | 2021 - 2022</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Created automated test cases to prevent regressions, contributing to a 25% faster QA
                      process</li>
                    <li>Improved application performance, enhancing load times by 20% and increasing user
                      satisfaction</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <div>
                  <h3 className="text-xl font-medium">Python, Blockchain, AWS</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    CODEIT Institute of Technology, Newark | 2021 - 2022</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Certificate of Software Engineering</h3>
                  <p className="text-gray-600 dark:text-gray-400">Clerk International University | 2020 - 2021</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Bachelor of Science in Chemical Engineering</h3>
                  <p className="text-gray-600 dark:text-gray-400">Kyambogo University | 2014 - 2018</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <ul className="list-disc list-inside">
                  <li>Python, C#, SQL (Intermediate), Data Engineering, Machine Learning, LLMs & Prompting</li>
                  <li>MongoDB, PostgreSQL, SQL Server</li>
                  <li>AWS, Azure, Docker, CI/CD</li>
                  <li>Agile Methodologies, Mentorship</li>
                </ul>
              </section>
            </div>
            <div className="bg-white-100 dark:bg-gray-900 pt-3">
              <DownloadButton />
            </ div>
          </div>
        </div>
      </div>
    </div>
  )
}
