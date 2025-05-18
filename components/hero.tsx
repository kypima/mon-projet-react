"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToSection = () => {
    const nextSection = document.querySelector("section:nth-of-type(2)")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Marras Kylian
            </h1>

            <div className="h-16 md:h-20 mb-8">
              <TypeAnimation
                sequence={[
                  "Étudiant en BTS SIO",
                  1000,
                  "Option SISR",
                  1000,
                  "Passionné de Cybersécurité",
                  1000,
                  "Administrateur Système & Réseau",
                  1000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-2xl md:text-4xl font-light text-gray-300"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 mb-10"
            >
              Bienvenue sur mon portfolio, découvrez mon parcours en BTS SIO option SISR et mes compétences en
              infrastructure, systèmes et réseaux.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projets">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Mes projets
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 rounded-full text-lg font-medium transition-all duration-300"
                >
                  Me contacter
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-gray-900 rounded-full overflow-hidden border-2 border-gray-800">
                <Image
                  src="https://placehold.co/600x600/111827/CCCCCC?text=SISR"
                  alt="Infrastructure réseau"
                  width={600}
                  height={600}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToSection}
          className="animate-bounce text-gray-400 hover:text-white"
        >
          <ChevronDown size={32} />
        </Button>
      </motion.div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
    </section>
  )
}
