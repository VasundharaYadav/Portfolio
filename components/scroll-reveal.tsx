"use client"

import type React from "react"

import { motion } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function ScrollReveal({ children, className = "", id }: ScrollRevealProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  )
}
