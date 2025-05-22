"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function ContactIllustration() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Animation for the envelope flap
  const flapVariants = {
    initial: { rotateX: 0 },
    animate: {
      rotateX: [0, 180, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 2,
      },
    },
  }

  // Animation for the paper
  const paperVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 3.5,
      },
    },
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* Envelope Body */}
        <motion.rect
          x="100"
          y="100"
          width="200"
          height="120"
          rx="5"
          fill={isDark ? "#374151" : "#f3f4f6"}
          stroke={isDark ? "#4b5563" : "#d1d5db"}
          strokeWidth="3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Envelope Flap */}
        <motion.path
          d="M100,100 L200,150 L300,100"
          fill="none"
          stroke={isDark ? "#4b5563" : "#d1d5db"}
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ transformOrigin: "200px 100px" }}
          variants={flapVariants}
          animate="animate"
        />

        {/* Paper */}
        <motion.rect
          x="130"
          y="120"
          width="140"
          height="80"
          fill={isDark ? "#f3f4f6" : "#ffffff"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={paperVariants}
          animate="animate"
        />

        {/* Paper Lines */}
        <motion.rect
          x="150"
          y="140"
          width="100"
          height="3"
          rx="1.5"
          fill={isDark ? "#9ca3af" : "#d1d5db"}
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        />
        <motion.rect
          x="150"
          y="155"
          width="80"
          height="3"
          rx="1.5"
          fill={isDark ? "#9ca3af" : "#d1d5db"}
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        />
        <motion.rect
          x="150"
          y="170"
          width="90"
          height="3"
          rx="1.5"
          fill={isDark ? "#9ca3af" : "#d1d5db"}
          initial={{ width: 0 }}
          animate={{ width: 90 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        />

        {/* Email Icon */}
        <motion.circle
          cx="200"
          cy="70"
          r="20"
          fill={isDark ? "#059669" : "#10b981"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1, type: "spring" }}
        />
        <motion.path
          d="M190,70 L200,78 L210,70"
          stroke="white"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.path
          d="M185,65 L200,75 L215,65"
          stroke="white"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        />

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
      </svg>
    </div>
  )
}
