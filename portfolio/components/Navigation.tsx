'use client'

import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname()
    const isHomePage = pathname === '/'
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-white">
                        <span className="text-red-500">&lt;</span>
                        Daniel Okello
                        <span className="text-red-500">/&gt;</span>
                    </Link>
                    <div className="flex items-center space-x-8">
                        {isHomePage ? (
                            <div className="hidden md:flex space-x-8 text-gray-300">
                                <Link href="#about" className="hover:text-white transition-colors">
                                    ABOUT ME
                                </Link>
                                <Link href="#services" className="hover:text-white transition-colors">
                                    SPECIALITIES
                                </Link>
                                <Link href="#portfolio" className="hover:text-white transition-colors">
                                    PORTFOLIO
                                </Link>
                                <Link href="#contact" className="hover:text-white transition-colors">
                                    CONTACT
                                </Link>
                                <Link href="/cv" className="hover:text-white transition-colors">
                                    RESUME
                                </Link>
                            </div>
                        ) : (
                            <div className="hidden md:flex space-x-8 text-gray-300">
                                <Link href="/#about" className="hover:text-white transition-colors">
                                    ABOUT ME
                                </Link>
                                <Link href="/#services" className="hover:text-white transition-colors">
                                    SERVICES
                                </Link>
                                <Link href="/#portfolio" className="hover:text-white transition-colors">
                                    PORTFOLIO
                                </Link>
                                <Link href="/#contact" className="hover:text-white transition-colors">
                                    CONTACT
                                </Link>
                                <Link href="/cv" className="hover:text-white transition-colors">
                                    RESUME
                                </Link>
                            </div>
                        )}
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://github.com/okellodaniel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/okellodaniel/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}