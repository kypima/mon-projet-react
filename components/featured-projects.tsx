"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileText, Network, Server } from "lucide-react"
import Link from "next/link"

export function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-gradient-to-b from-black/50 to-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="mb-4 px-4 py-1 bg-purple-500/20 text-purple-400 border-purple-500/50">Projets</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Projets Récents
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Découvrez quelques-uns de mes projets réalisés dans le cadre de ma formation BTS SIO option SISR.
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src="https://placehold.co/500x500/111827/CCCCCC?text=VLAN+Cisco"
                      alt="VLAN Cisco"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-purple-500 text-white">Réseau</Badge>
                        <Badge className="bg-gray-700 text-gray-300">SISR</Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white">Création d'un réseau local Virtuel</h3>
                      <p className="text-gray-400 mb-6">
                        Mise en place d'un réseau virtuel (VLAN) durant ma formation pour optimiser la gestion du réseau
                        interne. Configuration des ACL et utilisation de Cisco Packet Tracer pour la simulation.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        <FileText className="mr-2 h-4 w-4" /> Voir le PDF
                      </Button>
                      <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                        <Network className="mr-2 h-4 w-4" /> Détails
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src="https://placehold.co/500x500/111827/CCCCCC?text=Serveur+Debian"
                      alt="Serveur Debian"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-purple-500 text-white">Système</Badge>
                        <Badge className="bg-gray-700 text-gray-300">Linux</Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white">Création d'une machine virtuelle</h3>
                      <p className="text-gray-400 mb-6">
                        Installation d'un serveur Web avec Apache sous Linux Debian. Configuration complète incluant
                        PHP, MySQL et mise en place d'un serveur FTP pour le déploiement de sites web.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        <FileText className="mr-2 h-4 w-4" /> Voir le PDF
                      </Button>
                      <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                        <Server className="mr-2 h-4 w-4" /> Détails
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Link href="/projets">
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                Voir tous les projets <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
