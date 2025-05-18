"use client"

import { motion } from "framer-motion"

export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative">
        <motion.div
          className="w-20 h-20 border-4 border-t-cyan-500 border-r-purple-500 border-b-blue-500 border-l-pink-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          KM
        </motion.div>
      </div>
      <motion.div
        className="absolute mt-32 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-gray-400 mb-2">Chargement du portfolio...</p>
        <p className="text-cyan-400 text-sm">BTS SIO option SISR</p>
      </motion.div>
    </div>
  )
}
