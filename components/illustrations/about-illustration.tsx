"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function AboutIllustration() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.svg viewBox="0 0 400 300" initial="hidden" animate="visible" className="w-full h-auto">
        <motion.rect
          x="120"
          y="50"
          width="160"
          height="200"
          rx="10"
          fill={isDark ? "#374151" : "#f9fafb"}
          stroke={isDark ? "#4b5563" : "#e5e7eb"}
          strokeWidth="2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Profile Picture */}
        <motion.circle
          cx="200"
          cy="100"
          r="30"
          fill={isDark ? "#4b5563" : "#e5e7eb"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
        />

        {/* Text Lines */}
        <motion.rect
          x="150"
          y="150"
          width="100"
          height="8"
          rx="4"
          fill={isDark ? "#6b7280" : "#d1d5db"}
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        />
        <motion.rect
          x="150"
          y="170"
          width="80"
          height="8"
          rx="4"
          fill={isDark ? "#6b7280" : "#d1d5db"}
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        />
        <motion.rect
          x="150"
          y="190"
          width="120"
          height="8"
          rx="4"
          fill={isDark ? "#6b7280" : "#d1d5db"}
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        />
        <motion.rect
          x="150"
          y="210"
          width="90"
          height="8"
          rx="4"
          fill={isDark ? "#6b7280" : "#d1d5db"}
          initial={{ width: 0 }}
          animate={{ width: 90 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        />

        {/* Decorative Elements */}
        <motion.circle
          cx="320"
          cy="70"
          r="15"
          fill={isDark ? "#059669" : "#10b981"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.circle
          cx="80"
          cy="230"
          r="20"
          fill={isDark ? "#059669" : "#10b981"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        />
        <motion.path
          d="M330 200 Q 350 150, 370 200"
          stroke={isDark ? "#059669" : "#10b981"}
          strokeWidth="4"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        <motion.path
          d="M50 100 Q 70 50, 90 100"
          stroke={isDark ? "#059669" : "#10b981"}
          strokeWidth="4"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        />
      </motion.svg>
    </div>
  )
}
