"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function ProjectsIllustration() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Animation for the cursor
  const cursorVariants = {
    animate: {
      x: [0, 80, 80, 0, 0],
      y: [0, 0, 40, 40, 0],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1,
      },
    },
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* Computer Screen */}
        <motion.rect
          x="100"
          y="70"
          width="200"
          height="140"
          rx="5"
          fill={isDark ? "#1f2937" : "#f3f4f6"}
          stroke={isDark ? "#4b5563" : "#d1d5db"}
          strokeWidth="3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Screen Content */}
        <motion.rect
          x="120"
          y="90"
          width="160"
          height="100"
          fill={isDark ? "#111827" : "#ffffff"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        {/* Code Lines */}
        <motion.rect
          x="130"
          y="100"
          width="100"
          height="5"
          rx="2"
          fill={isDark ? "#6b7280" : "#e5e7eb"}
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        />
        <motion.rect
          x="130"
          y="115"
          width="80"
          height="5"
          rx="2"
          fill={isDark ? "#6b7280" : "#e5e7eb"}
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        />
        <motion.rect
          x="130"
          y="130"
          width="120"
          height="5"
          rx="2"
          fill={isDark ? "#6b7280" : "#e5e7eb"}
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        />
        <motion.rect
          x="130"
          y="145"
          width="90"
          height="5"
          rx="2"
          fill={isDark ? "#6b7280" : "#e5e7eb"}
          initial={{ width: 0 }}
          animate={{ width: 90 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        />
        <motion.rect
          x="130"
          y="160"
          width="110"
          height="5"
          rx="2"
          fill={isDark ? "#6b7280" : "#e5e7eb"}
          initial={{ width: 0 }}
          animate={{ width: 110 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        />
        <motion.rect
          x="130"
          y="175"
          width="70"
          height="5"
          rx="2"
          fill={isDark ? "#6b7280" : "#e5e7eb"}
          initial={{ width: 0 }}
          animate={{ width: 70 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        />

        {/* Cursor */}
        <motion.rect
          x="130"
          y="100"
          width="5"
          height="15"
          fill={isDark ? "#10b981" : "#059669"}
          variants={cursorVariants}
          animate="animate"
        />

        {/* Computer Stand */}
        <motion.path
          d="M180 210 L150 240 L250 240 L220 210 Z"
          fill={isDark ? "#374151" : "#9ca3af"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />

        {/* Decorative Elements */}
        <motion.circle
          cx="320"
          cy="70"
          r="15"
          fill={isDark ? "#059669" : "#10b981"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        />
        <motion.circle
          cx="80"
          cy="230"
          r="20"
          fill={isDark ? "#059669" : "#10b981"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <motion.path
          d="M330 200 Q 350 150, 370 200"
          stroke={isDark ? "#059669" : "#10b981"}
          strokeWidth="4"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </svg>
    </div>
  )
}
