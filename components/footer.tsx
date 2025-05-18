"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-black/80 border-t border-gray-800 py-10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Kylian Marras
            </h3>
            <p className="text-gray-400 mt-2">Portfolio BTS SIO - Option SISR</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8"
          >
            <Link href="/formation" className="text-gray-400 hover:text-white transition-colors">
              Formation
            </Link>
            <Link href="/projets" className="text-gray-400 hover:text-white transition-colors">
              Projets
            </Link>
            <Link href="/veille" className="text-gray-400 hover:text-white transition-colors">
              Veille
            </Link>
            <Link href="/competences" className="text-gray-400 hover:text-white transition-colors">
              Compétences
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Marras Kylian. Tous droits réservés.
          </p>
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}
