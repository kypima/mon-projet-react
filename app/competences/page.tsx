"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Server, Database, Code, Shield, Network, Wifi, Monitor, Cloud, Cpu } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import Image from "next/image"

export default function Competences() {
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

  const skills = [
    {
      category: "Systèmes",
      icon: <Server className="h-10 w-10 text-green-400" />,
      image: "/images/systems.jpg",
      items: [
        "Windows Server (Active Directory, GPO)",
        "Linux (Debian, Ubuntu)",
        "Virtualisation (VMware, VirtualBox)",
        "Administration système",
      ],
    },
    {
      category: "Réseaux",
      icon: <Network className="h-10 w-10 text-blue-400" />,
      image: "/images/networking.jpg",
      items: [
        "Configuration de VLAN",
        "Routage et commutation",
        "Protocoles réseau (TCP/IP, DNS, DHCP)",
        "Cisco Packet Tracer",
        "Analyse de trafic réseau",
      ],
    },
    {
      category: "Sécurité",
      icon: <Shield className="h-10 w-10 text-red-400" />,
      image: "/images/security.jpg",
      items: [
        "Pare-feu et VPN",
        "Audit de sécurité",
        "Gestion des accès et identités",
        "Sécurisation des réseaux",
        "Détection et prévention d'intrusions",
      ],
    },
    {
      category: "Développement",
      icon: <Code className="h-10 w-10 text-purple-400" />,
      image: "/images/development.jpg",
      items: ["HTML/CSS/JavaScript", "PHP", "Développement web", "Frameworks modernes (React, Next.js)"],
    },
    {
      category: "Bases de données",
      icon: <Database className="h-10 w-10 text-yellow-400" />,
      image: "/images/database.jpg",
      items: ["MySQL", "PostgreSQL", "Conception de BDD", "Requêtes SQL", "Administration de SGBD"],
    },
    {
      category: "Cloud & Virtualisation",
      icon: <Cloud className="h-10 w-10 text-cyan-400" />,
      image: "/images/cloud.jpg",
      items: [
        "Services cloud (AWS, Azure)",
        "Conteneurisation (Docker)",
        "Infrastructure as Code",
        "Virtualisation de serveurs",
      ],
    },
  ]

  return (
    <div className="relative">
      <PageHeader
        title="TCS"
        subtitle="Tableau de compétences et synthèse de mes acquis en BTS SIO SISR"
        gradient="from-green-400 to-teal-600"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <Badge className="mb-4 px-4 py-1 bg-green-500/20 text-green-400 border-green-500/50">SISR</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600">
                Spécialisation en Infrastructure, Systèmes et Réseaux
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                En tant qu'étudiant en BTS SIO option SISR, j'ai développé des compétences spécifiques dans la gestion
                des infrastructures informatiques, l'administration système et la configuration des réseaux.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-16">
              <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-6">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <FileText className="mr-2 h-4 w-4" /> Voir le tableau de synthèse complet
                    </Button>
                  </div>
                  <div className="relative w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
                    <Image
                      src="https://placehold.co/800x600/111827/CCCCCC?text=Tableau+de+synthèse+BTS+SIO"
                      alt="Tableau de synthèse des compétences"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-black/70 p-4 rounded-lg">
                        <p className="text-white font-medium">Tableau de synthèse des compétences BTS SIO</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 h-full"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={`https://placehold.co/400x200/111827/CCCCCC?text=${skill.category}`}
                        alt={skill.category}
                        width={400}
                        height={200}
                        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center">
                        <div className="bg-black/50 p-2 rounded-full mr-2">{skill.icon}</div>
                        <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <ul className="space-y-2">
                        {skill.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-400 flex items-center">
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16">
              <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">
                    Certifications et formations complémentaires
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center">
                      <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                        <Wifi className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Cisco Networking Academy</h4>
                        <p className="text-gray-400">
                          Formation aux technologies réseau et obtention du badge Packet Tracer
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center">
                      <div className="bg-red-500/10 p-3 rounded-full mr-4">
                        <Shield className="h-6 w-6 text-red-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Cybersécurité</h4>
                        <p className="text-gray-400">Formation aux bonnes pratiques de sécurité informatique</p>
                      </div>
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center">
                      <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                        <Monitor className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Administration Windows Server</h4>
                        <p className="text-gray-400">
                          Configuration et gestion d'Active Directory et services associés
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center">
                      <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                        <Cpu className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Linux Administration</h4>
                        <p className="text-gray-400">
                          Installation et configuration de serveurs Linux, gestion des services et sécurisation
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
