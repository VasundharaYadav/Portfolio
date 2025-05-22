"use client"

import { motion } from "framer-motion"
import { Code, Globe, Database, PenToolIcon as Tool } from "lucide-react"

interface SkillCardProps {
  title: string
  skills: string[]
  icon: "Code" | "Globe" | "Database" | "Tool"
}

export function SkillCard({ title, skills, icon }: SkillCardProps) {
  const icons = {
    Code: <Code className="h-6 w-6" />,
    Globe: <Globe className="h-6 w-6" />,
    Database: <Database className="h-6 w-6" />,
    Tool: <Tool className="h-6 w-6" />,
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mr-3 transition-colors duration-300">
          {icons[icon]}
        </div>
        <h3 className="text-lg font-bold text-neutral-800 dark:text-white transition-colors duration-300">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-neutral-50 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full text-sm font-medium border border-neutral-200 dark:border-neutral-600 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
