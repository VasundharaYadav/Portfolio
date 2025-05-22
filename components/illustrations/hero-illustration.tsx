"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function HeroIllustration() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Animation for the floating elements
  const floatVariants = {
    animate: (custom) => ({
      y: [0, -10, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        delay: custom * 0.2,
      },
    }),
  }

  // Animation for the pulse elements
  const pulseVariants = {
    animate: (custom) => ({
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        delay: custom * 0.3,
      },
    }),
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* Background Elements */}
        <motion.circle
          cx="200"
          cy="150"
          r="80"
          fill={isDark ? "#1f2937" : "#f9fafb"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        />

        {/* Decorative Circles */}
        <motion.circle
          cx="200"
          cy="150"
          r="60"
          fill="none"
          stroke={isDark ? "#374151" : "#e5e7eb"}
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <motion.circle
          cx="200"
          cy="150"
          r="40"
          fill="none"
          stroke={isDark ? "#4b5563" : "#d1d5db"}
          strokeWidth="2"
          strokeDasharray="3,3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        {/* Floating Elements */}
        <motion.circle
          cx="160"
          cy="110"
          r="15"
          fill={isDark ? "#059669" : "#10b981"}
          custom={0}
          variants={floatVariants}
          animate="animate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />

        <motion.circle
          cx="240"
          cy="130"
          r="10"
          fill={isDark ? "#0ea5e9" : "#3b82f6"}
          custom={1}
          variants={floatVariants}
          animate="animate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />

        <motion.circle
          cx="190"
          cy="190"
          r="12"
          fill={isDark ? "#8b5cf6" : "#a855f7"}
          custom={2}
          variants={floatVariants}
          animate="animate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        />

        <motion.circle
          cx="220"
          cy="180"
          r="8"
          fill={isDark ? "#ec4899" : "#ec4899"}
          custom={3}
          variants={floatVariants}
          animate="animate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        />

        {/* Central Element */}
        <motion.circle
          cx="200"
          cy="150"
          r="25"
          fill={isDark ? "#10b981" : "#059669"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, delay: 1.1, type: "spring" }}
        />

        <motion.text
          x="200"
          y="155"
          textAnchor="middle"
          fontSize="20"
          fontWeight="bold"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          VY
        </motion.text>

        {/* Pulse Rings */}
        <motion.circle
          cx="200"
          cy="150"
          r="30"
          fill="none"
          stroke={isDark ? "#10b981" : "#059669"}
          strokeWidth="2"
          custom={0}
          variants={pulseVariants}
          animate="animate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />

        <motion.circle
          cx="200"
          cy="150"
          r="45"
          fill="none"
          stroke={isDark ? "#10b981" : "#059669"}
          strokeWidth="1.5"
          custom={1}
          variants={pulseVariants}
          animate="animate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
        />

        <motion.circle
          cx="200"
          cy="150"
          r="65"
          fill="none"
          stroke={isDark ? "#10b981" : "#059669"}
          strokeWidth="1"
          custom={2}
          variants={pulseVariants}
          animate="animate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
        />

        {/* Connecting Lines */}
        <motion.line
          x1="200"
          y1="150"
          x2="160"
          y2="110"
          stroke={isDark ? "#6b7280" : "#9ca3af"}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        />

        <motion.line
          x1="200"
          y1="150"
          x2="240"
          y2="130"
          stroke={isDark ? "#6b7280" : "#9ca3af"}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        />

        <motion.line
          x1="200"
          y1="150"
          x2="190"
          y2="190"
          stroke={isDark ? "#6b7280" : "#9ca3af"}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        />

        <motion.line
          x1="200"
          y1="150"
          x2="220"
          y2="180"
          stroke={isDark ? "#6b7280" : "#9ca3af"}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        />
      </svg>
    </div>
  )
}
