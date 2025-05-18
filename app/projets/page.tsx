"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, ExternalLink, Server, Shield, Code, Network, Database } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export default function Projets() {
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
    <div className="relative">
      <PageHeader
        title="Mes Projets"
        subtitle="Découvrez les différents projets sur lesquels j'ai travaillé"
        gradient="from-purple-400 to-pink-600"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
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
                    Personel
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="formation" className="mt-0 space-y-10">
                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src="VLAN.png"
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
                        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
  <a
    href="VLAN.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
    <FileText className="mr-2 h-4 w-4" />
    Voir le PDF
  </a>
</Button>
                          <Button
                            variant="outline"
                            className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                          >
                            <Network className="mr-2 h-4 w-4" /> Détails
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>

                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src="https://placehold.co/500x500/111827/CCCCCC?text=Badge+Packet+Tracer"
                          alt="Badge Packet Tracer"
                          width={500}
                          height={500}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      </div>
                      <CardContent className="p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className="bg-purple-500 text-white">Certification</Badge>
                            <Badge className="bg-gray-700 text-gray-300">Cisco</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-white">Badge Packet Tracer</h3>
                          <p className="text-gray-400 mb-6">
                            Obtention du badge Cisco Packet Tracer après avoir complété une série d'exercices et de
                            défis sur la simulation de réseaux informatiques. Cette certification valide mes compétences
                            en conception et configuration de réseaux.
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                            <FileText className="mr-2 h-4 w-4" /> Voir le certificat
                          </Button>
                          <Button
                            variant="outline"
                            className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Détails
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="entreprise" className="mt-0 space-y-10">
                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src="debian.png"
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
                          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
  <a
    href="PDF débian server web.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
    <FileText className="mr-2 h-4 w-4" />
    Voir le PDF
  </a>
</Button>
                          <Button
                            variant="outline"
                            className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                          >
                            <Server className="mr-2 h-4 w-4" /> Détails
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>

                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src="https://placehold.co/500x500/111827/CCCCCC?text=Hebergement+Web"
                          alt="Hébergement Web"
                          width={500}
                          height={500}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      </div>
                      <CardContent className="p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className="bg-purple-500 text-white">Web</Badge>
                            <Badge className="bg-gray-700 text-gray-300">Hébergement</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-white">Hébergement d'un site web</h3>
                          <p className="text-gray-400 mb-6">
                            Mise en place d'une solution d'hébergement pour un site web d'entreprise. Configuration du
                            serveur, installation des certificats SSL, optimisation des performances et mise en place
                            d'une stratégie de sauvegarde.
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                            <Database className="mr-2 h-4 w-4" /> Documentation
                          </Button>
                          <Button
                            variant="outline"
                            className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Voir le site
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="autres" className="mt-0 space-y-10">
                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src="https://placehold.co/500x500/111827/CCCCCC?text=Audit+de+securite"
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
                          <Button
                            variant="outline"
                            className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                          >
                            <Code className="mr-2 h-4 w-4" /> Méthodologie
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>

                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src="https://placehold.co/500x500/111827/CCCCCC?text=Portfolio"
                          alt="Portfolio"
                          width={500}
                          height={500}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      </div>
                      <CardContent className="p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className="bg-purple-500 text-white">Web</Badge>
                            <Badge className="bg-gray-700 text-gray-300">Next.js</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-white">Réalisation Portfolio</h3>
                          <p className="text-gray-400 mb-6">
                            Création d'un portfolio professionnel avec Next.js et Tailwind CSS. Implémentation
                            d'animations avancées, optimisation des performances et déploiement sur Vercel.
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                            <Code className="mr-2 h-4 w-4" /> Code source
                          </Button>
                          <Button
                            variant="outline"
                            className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Voir le site
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
    </div>
  )
}
