"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Server, Database, Code, Shield, Network } from "lucide-react"
import Link from "next/link"

export function Skills() {
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
      icon: <Server className="h-10 w-10 text-green-400" />,
      title: "Administration Système",
      description: "Windows Server, Linux, Virtualisation",
    },
    {
      icon: <Network className="h-10 w-10 text-blue-400" />,
      title: "Réseaux",
      description: "VLAN, Routage, Protocoles réseau",
    },
    {
      icon: <Shield className="h-10 w-10 text-red-400" />,
      title: "Cybersécurité",
      description: "Pare-feu, Audit, Sécurisation",
    },
    {
      icon: <Database className="h-10 w-10 text-yellow-400" />,
      title: "Bases de données",
      description: "MySQL, PostgreSQL, SQL",
    },
    {
      icon: <Code className="h-10 w-10 text-purple-400" />,
      title: "Développement",
      description: "HTML/CSS, JavaScript, PHP",
    },
  ]

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="mb-4 px-4 py-1 bg-green-500/20 text-green-400 border-green-500/50">SISR</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600">
              Compétences Techniques
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              En tant qu'étudiant en BTS SIO option SISR, j'ai développé des compétences spécifiques dans la gestion des
              infrastructures informatiques.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
                >
                  <div className="bg-gray-800/50 p-4 rounded-full w-fit mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Link href="/competences">
              <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
                Voir toutes mes compétences <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
