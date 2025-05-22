"use client"

import type React from "react"

import { motion } from "framer-motion"

interface RevealTextProps {
  children: React.ReactNode
  delay?: number
}

export function RevealText({ children, delay = 0 }: RevealTextProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay }}>
      {children}
    </motion.div>
  )
}
