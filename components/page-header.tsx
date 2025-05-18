"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle: string
  gradient: string
}

export function PageHeader({ title, subtitle, gradient }: PageHeaderProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h1
          className={`text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}
        >
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
      </motion.div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
    </section>
  )
}
