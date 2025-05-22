"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useTheme } from "next-themes"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 ${
        isDark ? "bg-emerald-400" : "bg-emerald-500"
      } z-50 origin-left transition-colors duration-300`}
      style={{ scaleX }}
    />
  )
}
