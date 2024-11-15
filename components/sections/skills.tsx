"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface Skill {
  name: string
  level: number
  icon: string
}

export default function Skills() {
  const [showLevel, setShowLevel] = useState<boolean>(false)

  const skills: Skill[] = [
    { name: "React", level: 90, icon: "react-icon" },
    { name: "Node.js", level: 85, icon: "nodejs-icon" },
    { name: "CSS", level: 80, icon: "css-icon" },
    { name: "JavaScript", level: 95, icon: "js-icon" },
    { name: "TypeScript", level: 90, icon: "ts-icon" },
  ]

  return (
    <section id="skills" className="py-24 bg-background dark:bg-dark-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100"
          >
            My Skills
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 dark:text-muted-foreground-dark"
          >
            Here's a collection of my skills with their proficiency levels.
          </motion.p>
          <Button onClick={() => setShowLevel(!showLevel)} className="mb-8">
            {showLevel ? "Hide Levels" : "Show Levels"}
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
              style={{ background: `hsl(${(index * 50) % 360}, 70%, 50%)` }} // Unique color for each card
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.div
                className="flex items-center justify-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <img src={`/icons/${skill.icon}.svg`} alt={skill.name} className="w-12 h-12" />
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {skill.name}
              </motion.h3>
              {showLevel && (
                <motion.p
                  className="text-white mt-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  Proficiency: {skill.level}%
                </motion.p>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-4"
              >
                <Button size="sm" className="group">
                  More Details
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
