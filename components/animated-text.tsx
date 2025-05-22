"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  words?: boolean
}

export function AnimatedText({ children, className = "", words = false }: AnimatedTextProps) {
  const [text, setText] = useState<string>("")

  useEffect(() => {
    if (typeof children === "string") {
      setText(children)
    } else if (
      children &&
      typeof children === "object" &&
      "props" in children &&
      typeof children.props.children === "string"
    ) {
      setText(children.props.children)
    }
  }, [children])

  // Split text into words or characters
  const items = words ? text.split(" ") : text.split("")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div className={className} variants={container} initial="hidden" animate="visible">
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ marginRight: words ? "0.5rem" : "" }}
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  )
}
