"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function CertificationsIllustration() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Animation for the certificate
  const certificateVariants = {
    initial: { rotate: -5 },
    animate: {
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  }

  // Animation for the badge
  const badgeVariants = {
    initial: { scale: 0.9 },
    animate: {
      scale: [0.9, 1.1, 0.9],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* Certificate */}
        <motion.g
          variants={certificateVariants}
          initial="initial"
          animate="animate"
          style={{ transformOrigin: "200px 150px" }}
        >
          <motion.rect
            x="120"
            y="100"
            width="160"
            height="100"
            rx="5"
            fill={isDark ? "#374151" : "#f9fafb"}
            stroke={isDark ? "#4b5563" : "#d1d5db"}
            strokeWidth="3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Certificate Border */}
          <motion.rect
            x="130"
            y="110"
            width="140"
            height="80"
            rx="3"
            fill="none"
            stroke={isDark ? "#6b7280" : "#9ca3af"}
            strokeWidth="1"
            strokeDasharray="2,2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          {/* Certificate Content */}
          <motion.rect
            x="150"
            y="130"
            width="100"
            height="5"
            rx="2.5"
            fill={isDark ? "#6b7280" : "#9ca3af"}
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          />
          <motion.rect
            x="150"
            y="145"
            width="80"
            height="5"
            rx="2.5"
            fill={isDark ? "#6b7280" : "#9ca3af"}
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          />
          <motion.rect
            x="150"
            y="160"
            width="90"
            height="5"
            rx="2.5"
            fill={isDark ? "#6b7280" : "#9ca3af"}
            initial={{ width: 0 }}
            animate={{ width: 90 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          />

          {/* Certificate Seal */}
          <motion.circle
            cx="240"
            cy="170"
            r="15"
            fill={isDark ? "#10b981" : "#059669"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
          />
          <motion.path
            d="M235,170 L240,175 L245,165"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          />
        </motion.g>

        {/* Badge */}
        <motion.g
          variants={badgeVariants}
          initial="initial"
          animate="animate"
          style={{ transformOrigin: "300px 150px" }}
        >
          <motion.circle
            cx="300"
            cy="150"
            r="30"
            fill={isDark ? "#4b5563" : "#e5e7eb"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          />
          <motion.circle
            cx="300"
            cy="150"
            r="25"
            fill={isDark ? "#10b981" : "#059669"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.text
            x="300"
            y="155"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            🏆
          </motion.text>
        </motion.g>

        {/* Trophy */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.rect
            x="80"
            y="150"
            width="30"
            height="40"
            fill={isDark ? "#fbbf24" : "#fbbf24"}
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          <motion.rect
            x="75"
            y="140"
            width="40"
            height="10"
            fill={isDark ? "#f59e0b" : "#f59e0b"}
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          <motion.rect
            x="90"
            y="190"
            width="10"
            height="20"
            fill={isDark ? "#f59e0b" : "#f59e0b"}
            initial={{ height: 0 }}
            animate={{ height: 20 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          />
          <motion.rect
            x="80"
            y="210"
            width="30"
            height="10"
            fill={isDark ? "#f59e0b" : "#f59e0b"}
            initial={{ width: 0 }}
            animate={{ width: 30 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          />
        </motion.g>

        {/* Decorative Elements */}
        <motion.path
          d="M330 200 Q 350 150, 370 200"
          stroke={isDark ? "#10b981" : "#059669"}
          strokeWidth="4"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
        />
        <motion.path
          d="M50 100 Q 70 50, 90 100"
          stroke={isDark ? "#10b981" : "#059669"}
          strokeWidth="4"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
        />
      </svg>
    </div>
  )
}
