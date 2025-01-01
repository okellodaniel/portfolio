import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2024 Daniel Okello. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/okellodaniel" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/okellodaniel/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://x.com/OkelloDani" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

