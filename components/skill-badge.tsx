"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="px-3 py-1 bg-gradient-to-r from-pink-500/30 to-purple-600/30 text-white rounded-full text-sm font-medium border border-pink-500/20 hover:border-pink-400/40 transition-colors"
    >
      {name}
    </motion.div>
  )
}
