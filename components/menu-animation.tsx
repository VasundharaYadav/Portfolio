"use client"

import { motion } from "framer-motion"

interface MenuAnimationProps {
  isOpen: boolean
}

export function MenuAnimation({ isOpen }: MenuAnimationProps) {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="fixed bottom-8 left-8 z-40 pointer-events-none"
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={variants}
    >
      <motion.div variants={itemVariants} className="w-4 h-4 bg-emerald-500 rounded-full mb-3" />
      <motion.div variants={itemVariants} className="w-4 h-4 bg-emerald-400 rounded-full mb-3" />
      <motion.div variants={itemVariants} className="w-4 h-4 bg-emerald-300 rounded-full" />
    </motion.div>
  )
}
