"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Server, Database, Code, Shield, Network } from "lucide-react"

export function TCS() {
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

  const skills = [
    {
      category: "Systèmes",
      icon: <Server className="h-10 w-10 text-green-400" />,
      items: [
        "Windows Server",
        "Linux (Debian, Ubuntu)",
        "Virtualisation (VMware, VirtualBox)",
        "Administration système",
      ],
    },
    {
      category: "Réseaux",
      icon: <Network className="h-10 w-10 text-blue-400" />,
      items: ["Configuration de VLAN", "Routage", "Protocoles réseau", "Cisco Packet Tracer"],
    },
    {
      category: "Sécurité",
      icon: <Shield className="h-10 w-10 text-red-400" />,
      items: ["Pare-feu", "Audit de sécurité", "Gestion des accès", "Sécurisation des réseaux"],
    },
    {
      category: "Développement",
      icon: <Code className="h-10 w-10 text-purple-400" />,
      items: ["HTML/CSS", "JavaScript", "PHP", "Développement web"],
    },
    {
      category: "Bases de données",
      icon: <Database className="h-10 w-10 text-yellow-400" />,
      items: ["MySQL", "PostgreSQL", "Conception de BDD", "Requêtes SQL"],
    },
  ]

  return (
    <section
      id="tcs"
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900/30 to-black/50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="mb-4 px-4 py-1 bg-green-500/20 text-green-400 border-green-500/50">Compétences</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600">
              Tableau de Compétences et Synthèse
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Découvrez mes compétences techniques et professionnelles acquises durant ma formation BTS SIO.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <FileText className="mr-2 h-4 w-4" /> Voir le tableau de synthèse complet
                  </Button>
                </div>
                <div className="relative w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-400">Aperçu du tableau de synthèse des compétences</p>
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
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4">{skill.icon}</div>
                      <h3 className="text-xl font-bold mb-4 text-white">{skill.category}</h3>
                      <ul className="space-y-2">
                        {skill.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-400 flex items-center justify-center">
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
