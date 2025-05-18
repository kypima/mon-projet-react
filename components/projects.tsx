"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, ExternalLink, Server, Shield, Code } from "lucide-react"

export function Projects() {
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
    <section
      id="projects"
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-black/50 to-gray-900/30"
    >
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
              Mes Réalisations
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Découvrez les différents projets sur lesquels j'ai travaillé durant ma formation et en entreprise.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="formation" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-900/50 border border-gray-800 rounded-full overflow-hidden p-1">
                <TabsTrigger
                  value="formation"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                >
                  Formation
                </TabsTrigger>
                <TabsTrigger
                  value="entreprise"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                >
                  Entreprise
                </TabsTrigger>
                <TabsTrigger
                  value="autres"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                >
                  Autres
                </TabsTrigger>
              </TabsList>

              <TabsContent value="formation" className="mt-0">
                <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=500&width=500"
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
                          <Badge className="bg-gray-700 text-gray-300">Cisco</Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Création d'un réseau local Virtuel</h3>
                        <p className="text-gray-400 mb-6">
                          Mise en place d'un réseau virtuel (VLAN) durant ma formation pour optimiser la gestion du
                          réseau interne. Configuration des ACL et utilisation de Cisco Packet Tracer pour la
                          simulation.
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                          <FileText className="mr-2 h-4 w-4" /> Voir le PDF
                        </Button>
                        <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                          <ExternalLink className="mr-2 h-4 w-4" /> Détails
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="entreprise" className="mt-0">
                <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=500&width=500"
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
              </TabsContent>

              <TabsContent value="autres" className="mt-0">
                <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=500&width=500"
                        alt="Audit de sécurité"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    </div>
                    <CardContent className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className="bg-purple-500 text-white">Sécurité</Badge>
                          <Badge className="bg-gray-700 text-gray-300">Audit</Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Audit de sécurité</h3>
                        <p className="text-gray-400 mb-6">
                          Identification des failles de sécurité d'un système d'information, avec des recommandations
                          pour renforcer la protection des données et améliorer la posture de sécurité globale.
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                          <Shield className="mr-2 h-4 w-4" /> Voir le rapport
                        </Button>
                        <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                          <Code className="mr-2 h-4 w-4" /> Méthodologie
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
