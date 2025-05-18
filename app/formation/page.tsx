"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"

export default function Formation() {
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
    <div className="relative">
      <PageHeader
        title="Ma Formation"
        subtitle="Découvrez mon parcours académique et professionnel"
        gradient="from-cyan-400 to-blue-600"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Badge className="mb-4 px-4 py-1 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">BTS SIO</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                Services Informatiques aux Organisations
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Le BTS SIO (Services Informatiques aux Organisations) est une formation de niveau Bac+2 orientée sur
                l'informatique. J'ai choisi l'option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) pour
                développer une expertise en gestion de réseaux, sécurité informatique et administration système.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-16">
              <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-cyan-500 text-white">Option SISR</Badge>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      Solutions d'Infrastructure, Systèmes et Réseaux
                    </h3>
                    <p className="text-gray-400">
                      L'option SISR forme des professionnels capables de gérer et d'administrer l'infrastructure
                      informatique des entreprises. Elle couvre des domaines tels que :
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-400">
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                        Administration des systèmes (Windows Server, Linux)
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                        Configuration et maintenance des réseaux
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                        Virtualisation et cloud computing
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                        Cybersécurité et protection des données
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src="https://placehold.co/600x400/111827/CCCCCC?text=SISR+Infrastructure"
                      alt="Infrastructure réseau SISR"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div variants={itemVariants}>
                <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="https://placehold.co/600x400/111827/CCCCCC?text=Ensitech"
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
                      src="https://placehold.co/600x400/111827/CCCCCC?text=Start+Esport"
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
                      performantes pour le gaming, en tenant compte des exigences spécifiques liées à la compétition et
                      à l'expérience utilisateur.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-16">
              <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://placehold.co/800x400/111827/CCCCCC?text=EME"
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
                    EME (École Modèle Électronique) forme aux métiers de l'électronique, de l'automatisme et des
                    systèmes numériques. J'ai fait un Bac Pro SN (Systèmes Numériques) où j'ai appris à monter des PC et
                    à travailler sur les infrastructures informatiques. J'étais en RISC (Réseau Informatique Systèmes
                    Communicants).
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
