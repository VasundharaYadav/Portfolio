"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function SkillsIllustration() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Animation variants for the gears
  const gearVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  }

  const reverseGearVariants = {
    animate: {
      rotate: -360,
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* Brain outline */}
        <motion.path
          d="M200,70 C240,50 280,60 300,100 C320,140 310,190 280,210 C250,230 220,240 200,240 C180,240 150,230 120,210 C90,190 80,140 100,100 C120,60 160,50 200,70 Z"
          fill="none"
          stroke={isDark ? "#6b7280" : "#9ca3af"}
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
        />

        {/* Brain details */}
        <motion.path
          d="M200,70 C220,90 230,110 220,130 C210,150 190,160 170,150 C150,140 140,120 150,100 C160,80 180,70 200,70 Z"
          fill="none"
          stroke={isDark ? "#6b7280" : "#9ca3af"}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        <motion.path
          d="M200,70 C180,90 170,110 180,130 C190,150 210,160 230,150 C250,140 260,120 250,100 C240,80 220,70 200,70 Z"
          fill="none"
          stroke={isDark ? "#6b7280" : "#9ca3af"}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />

        <motion.path
          d="M200,240 C210,220 230,210 250,220 C270,230 280,250 270,270 C260,290 240,300 220,290 C200,280 190,260 200,240 Z"
          fill="none"
          stroke={isDark ? "#6b7280" : "#9ca3af"}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />

        {/* Gears */}
        <motion.g variants={gearVariants} animate="animate" style={{ originX: "150px", originY: "150px" }}>
          <circle cx="150" cy="150" r="25" fill={isDark ? "#374151" : "#d1d5db"} />
          <path
            d="M150,115 L155,125 L165,120 L160,130 L170,135 L160,140 L165,150 L155,150 L150,160 L145,150 L135,150 L140,140 L130,135 L140,130 L135,120 L145,125 Z"
            fill={isDark ? "#059669" : "#10b981"}
          />
        </motion.g>

        <motion.g variants={reverseGearVariants} animate="animate" style={{ originX: "250px", originY: "150px" }}>
          <circle cx="250" cy="150" r="20" fill={isDark ? "#374151" : "#d1d5db"} />
          <path
            d="M250,120 L255,130 L265,125 L260,135 L270,140 L260,145 L265,155 L255,155 L250,165 L245,155 L235,155 L240,145 L230,140 L240,135 L235,125 L245,130 Z"
            fill={isDark ? "#059669" : "#10b981"}
          />
        </motion.g>

        {/* Code symbols */}
        <motion.text
          x="180"
          y="100"
          fontFamily="monospace"
          fontSize="20"
          fill={isDark ? "#10b981" : "#059669"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          &lt;/&gt;
        </motion.text>

        <motion.text
          x="210"
          y="180"
          fontFamily="monospace"
          fontSize="20"
          fill={isDark ? "#10b981" : "#059669"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          {}
        </motion.text>

        <motion.text
          x="150"
          y="200"
          fontFamily="monospace"
          fontSize="20"
          fill={isDark ? "#10b981" : "#059669"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          #
        </motion.text>
      </svg>
    </div>
  )
}
