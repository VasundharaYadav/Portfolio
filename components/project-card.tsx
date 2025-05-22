"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  role: string
  points: string[]
}

export function ProjectCard({ title, description, tags, role, points }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full border-neutral-200 dark:border-neutral-700 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-neutral-800">
        <CardHeader className="bg-neutral-50 dark:bg-neutral-700 pb-4">
          <CardTitle className="text-xl text-neutral-800 dark:text-white transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div>
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 transition-colors duration-300">
              Role: {role}
            </p>
          </div>
          <div className="space-y-2">
            {points.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 flex-shrink-0 transition-colors duration-300" />
                <p className="text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">{point}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs rounded-md border border-emerald-100 dark:border-emerald-800 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
