'use client'

import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/#" className="text-2xl font-bold">DO</Link>
        {isHomePage ? (
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
            <Link href="/cv" className="hover:text-blue-500 dark:hover:text-blue-400">Resume</Link>
            <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
          </nav>
        ) : (
          <nav className="hidden md:flex space-x-8">
            <a href="/#about" className="hover:text-blue-500 dark:hover:text-blue-400">About</a>
            <a href="/#skills" className="hover:text-blue-500 dark:hover:text-blue-400">Skills</a>
            <a href="/#projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
            <Link href="/cv" className="hover:text-blue-500 dark:hover:text-blue-400">Resume</Link>
            <a href="/#contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
          </nav>
        )}
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  )
}

