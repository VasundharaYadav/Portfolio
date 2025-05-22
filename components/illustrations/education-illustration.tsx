"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function EducationIllustration() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.svg viewBox="0 0 400 300" initial="hidden" animate="visible" className="w-full h-auto">
        {/* Graduation Cap */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.rect
            x="150"
            y="120"
            width="100"
            height="20"
            fill={isDark ? "#4b5563" : "#6b7280"}
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          />
          <motion.rect
            x="140"
            y="140"
            width="120"
            height="10"
            fill={isDark ? "#374151" : "#9ca3af"}
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />
          <motion.path
            d="M200 120 L 250 80 L 150 80 Z"
            fill={isDark ? "#4b5563" : "#6b7280"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.circle
            cx="200"
            cy="80"
            r="10"
            fill={isDark ? "#059669" : "#10b981"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
          />
        </motion.g>

        {/* Books */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.rect
            x="120"
            y="170"
            width="30"
            height="80"
            fill={isDark ? "#1f2937" : "#ef4444"}
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
          <motion.rect
            x="150"
            y="180"
            width="30"
            height="70"
            fill={isDark ? "#374151" : "#3b82f6"}
            initial={{ height: 0 }}
            animate={{ height: 70 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.rect
            x="180"
            y="160"
            width="30"
            height="90"
            fill={isDark ? "#4b5563" : "#10b981"}
            initial={{ height: 0 }}
            animate={{ height: 90 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          />
          <motion.rect
            x="210"
            y="175"
            width="30"
            height="75"
            fill={isDark ? "#6b7280" : "#8b5cf6"}
            initial={{ height: 0 }}
            animate={{ height: 75 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.rect
            x="240"
            y="185"
            width="30"
            height="65"
            fill={isDark ? "#9ca3af" : "#ec4899"}
            initial={{ height: 0 }}
            animate={{ height: 65 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          />
        </motion.g>

        {/* Decorative Elements */}
        <motion.circle
          cx="320"
          cy="70"
          r="15"
          fill={isDark ? "#059669" : "#10b981"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <motion.circle
          cx="80"
          cy="230"
          r="20"
          fill={isDark ? "#059669" : "#10b981"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.path
          d="M330 200 Q 350 150, 370 200"
          stroke={isDark ? "#059669" : "#10b981"}
          strokeWidth="4"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        />
      </motion.svg>
    </div>
  )
}
