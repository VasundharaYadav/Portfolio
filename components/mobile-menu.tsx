"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

interface NavLink {
  href: string
  label: string
}

interface MobileMenuProps {
  links: NavLink[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Close menu on resize if screen becomes larger than mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white dark:bg-neutral-900 transition-colors duration-300"
          >
            <div className="container h-full flex flex-col">
              <div className="flex justify-between items-center py-4">
                <span className="font-bold text-neutral-800 dark:text-white transition-colors duration-300">
                  Vasundhara Yadav
                </span>
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                  </button>
                </div>
              </div>

              <nav className="flex flex-col justify-center flex-1 pb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="space-y-8"
                >
                  {links.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="block text-3xl font-bold text-neutral-800 dark:text-white transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute bottom-8 left-8 space-y-3 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="w-4 h-4 bg-emerald-500 rounded-full"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="w-4 h-4 bg-emerald-400 rounded-full"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="w-4 h-4 bg-emerald-300 rounded-full"
                  />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
