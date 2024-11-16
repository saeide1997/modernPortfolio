'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Footer() {
  const [textColors, setTextColors] = useState(['text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500'])

  useEffect(() => {
    const interval = setInterval(() => {
      setTextColors(prevColors => [...prevColors.slice(1), prevColors[0]])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="w-full border-t bg-background dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            {[
              "© 2024 Folio Motion. All rights reserved.",
              "Created by ANIRUDDHA ADAK",
              "Phone: +917029155691",
              "Email: aniruddhaadak80@gmail.com"
            ].map((text, index) => (
              <p
                key={index}
                className={`mt-1 text-sm font-medium ${textColors[index]} transition-colors duration-500 ease-in-out animate-pulse`}
              >
                {text}
              </p>
            ))}
          </div>
          <div className="flex space-x-4">
            {[
              { icon: Github, href: "https://github.com/aniruddhaadak80", color: "text-purple-500" },
              { icon: Linkedin, href: "https://linkedin.com/in/aniruddha-adak", color: "text-blue-500" },
              { icon: Twitter, href: "https://twitter.com/aniruddha_adak", color: "text-sky-500" },
              { icon: Mail, href: "mailto:aniruddhaadak80@gmail.com", color: "text-red-500" }
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`group transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${social.color}`}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <social.icon className={`h-5 w-5 transition-all duration-300 ${social.color}`} />
                  <span className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping bg-current"></span>
                  <span className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-current"></span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
