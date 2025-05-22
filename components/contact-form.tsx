"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-neutral-800 dark:text-white transition-colors duration-300">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            required
            className="border-neutral-300 dark:border-neutral-600 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-emerald-500 dark:focus:ring-emerald-400 dark:bg-neutral-700 dark:text-white transition-colors duration-300"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-neutral-800 dark:text-white transition-colors duration-300">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            required
            className="border-neutral-300 dark:border-neutral-600 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-emerald-500 dark:focus:ring-emerald-400 dark:bg-neutral-700 dark:text-white transition-colors duration-300"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-neutral-800 dark:text-white transition-colors duration-300">
          Subject
        </Label>
        <Input
          id="subject"
          placeholder="How can I help you?"
          required
          className="border-neutral-300 dark:border-neutral-600 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-emerald-500 dark:focus:ring-emerald-400 dark:bg-neutral-700 dark:text-white transition-colors duration-300"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-neutral-800 dark:text-white transition-colors duration-300">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Tell me about your project or inquiry..."
          className="min-h-[150px] border-neutral-300 dark:border-neutral-600 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-emerald-500 dark:focus:ring-emerald-400 dark:bg-neutral-700 dark:text-white transition-colors duration-300"
          required
        />
      </div>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white transition-colors duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Sending...</>
          ) : (
            <>
              Send Message <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </motion.div>
    </form>
  )
}
