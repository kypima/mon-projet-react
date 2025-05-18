"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="mb-4 px-4 py-1 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">Formation</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              BTS SIO - Services Informatiques aux Organisations
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Le BTS SIO (Services Informatiques aux Organisations) est une formation de niveau Bac+2 orientée sur
              l'informatique. Au cours de cette formation, j'ai spécialisé mes compétences dans l'option SISR (Solutions
              d'Infrastructure, Systèmes et Réseaux), avec une expertise en gestion de réseaux, sécurité informatique et
              administration système.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Ensitech"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-cyan-500 text-white">École</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">ENSITECH</h3>
                  <p className="text-gray-400">
                    Ensitech est une école qui forme aux métiers du numérique, comme le développement web, la
                    cybersécurité et le réseau. J'y suis actuellement en formation pour mon BTS SIO option SISR.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Start Esport"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-purple-500 text-white">Entreprise</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">START ESPORT</h3>
                  <p className="text-gray-400">
                    Start Esport est une entreprise spécialisée dans la conception et l'assemblage de PC sur mesure,
                    adaptés aux besoins des joueurs et des passionnés d'esport. Elle propose des configurations
                    performantes pour le gaming, en tenant compte des exigences spécifiques liées à la compétition et à
                    l'expérience utilisateur.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="EME"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-blue-500 text-white">Parcours</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">MON PARCOURS</h3>
                <p className="text-gray-400">
                  EME (École Modèle Électronique) forme aux métiers de l'électronique, de l'automatisme et des systèmes
                  numériques. J'ai fait un Bac Pro SN (Systèmes Numériques) où j'ai appris à monter des PC et à
                  travailler sur les infrastructures informatiques. J'étais en RISC (Réseau Informatique Systèmes
                  Communicants).
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
