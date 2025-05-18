"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="mb-4 px-4 py-1 bg-pink-500/20 text-pink-400 border-pink-500/50">Contact</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-600">
              Restons en Contact
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              N'hésitez pas à me contacter pour discuter de projets, opportunités ou simplement pour échanger.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Informations de Contact</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-pink-500/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-pink-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                        <p className="text-gray-400">kylian.marras@example.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-pink-500/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-pink-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Téléphone</h4>
                        <p className="text-gray-400">+33 6 XX XX XX XX</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-pink-500/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-pink-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Localisation</h4>
                        <p className="text-gray-400">Marseille, France</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h4 className="text-lg font-medium text-white mb-4">Réseaux Sociaux</h4>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-pink-500 text-pink-400 hover:bg-pink-500/10"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-pink-500 text-pink-400 hover:bg-pink-500/10"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-pink-500 text-pink-400 hover:bg-pink-500/10"
                      >
                        <Mail className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Envoyez-moi un Message</h3>

                  {isSubmitted ? (
                    <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center">
                      <h4 className="text-lg font-medium text-green-400 mb-2">Message Envoyé !</h4>
                      <p className="text-gray-300">
                        Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                          Nom
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          required
                          className="bg-gray-800/50 border-gray-700 focus:border-pink-500 focus:ring-pink-500/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          required
                          className="bg-gray-800/50 border-gray-700 focus:border-pink-500 focus:ring-pink-500/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Votre message..."
                          rows={5}
                          required
                          className="bg-gray-800/50 border-gray-700 focus:border-pink-500 focus:ring-pink-500/20"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Envoi en cours...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="mr-2 h-4 w-4" /> Envoyer le message
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
