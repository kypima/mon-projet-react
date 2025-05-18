"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Hero } from "@/components/hero"
import { Loader } from "@/components/loader"
import { ParticlesBackground } from "@/components/particles-background"
import { FeaturedProjects } from "@/components/featured-projects"
import { Skills } from "@/components/skills"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simuler un temps de chargement pour l'animation
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <ParticlesBackground />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
              <Hero />

              <section className="py-20">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                      BTS SIO - Option SISR
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                      Spécialisé en{" "}
                      <span className="font-bold text-cyan-400">Solutions d'Infrastructure, Systèmes et Réseaux</span>,
                      je développe des compétences en administration système, gestion de réseaux, virtualisation et
                      cybersécurité.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link href="/formation">
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                          Ma formation <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/projets">
                        <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                          Mes projets <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </section>

              <FeaturedProjects />
              <Skills />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
