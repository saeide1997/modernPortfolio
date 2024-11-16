'use client'

import { Github, Linkedin, Mail, Twitter, ArrowUp, Sun, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <footer className={`w-full border-t transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-blue-100 to-purple-100'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground animate-pulse">
              © 2024 Folio Motion. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Created by <a href="https://github.com/aniruddhaadak80/" className="text-primary hover:text-primary/90 underline">ANIRUDDHA ADAK</a>
            </p>
            <p className="mt-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Phone: <a href="tel:+917029155691" className="text-primary hover:text-primary/90 underline">+917029155691</a>
            </p>
            <p className="mt-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Email: <a href="mailto:aniruddhaadak80@gmail.com" className="text-primary hover:text-primary/90 underline">aniruddhaadak80@gmail.com</a>
            </p>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: Github, href: "https://github.com/aniruddhaadak80" },
              { icon: Linkedin, href: "https://linkedin.com/in/aniruddha-adak" },
              { icon: Twitter, href: "https://twitter.com/aniruddha_adak" },
              { icon: Mail, href: "mailto:aniruddhaadak80@gmail.com" }
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="group transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <social.icon className="h-5 w-5 group-hover:text-primary transition-all duration-300" />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className={`fixed bottom-4 right-4 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 transition-all duration-300"
        onClick={toggleTheme}
      >
        {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </footer>
  )
}
