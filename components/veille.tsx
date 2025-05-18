"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Shield, Cpu, Cloud, Scale } from "lucide-react"

export function Veille() {
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
    <section id="veille" ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="mb-4 px-4 py-1 bg-blue-500/20 text-blue-400 border-blue-500/50">Veille</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              Veille Informationnelle
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Découvrez ma veille technologique et juridique pour rester à jour sur les dernières tendances et
              réglementations.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="technologique" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12 bg-gray-900/50 border border-gray-800 rounded-full overflow-hidden p-1">
                <TabsTrigger
                  value="technologique"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                >
                  Veille Technologique
                </TabsTrigger>
                <TabsTrigger
                  value="juridique"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                >
                  Veille Juridique
                </TabsTrigger>
              </TabsList>

              <TabsContent value="technologique" className="mt-0 space-y-6">
                <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-blue-500 text-white">IA</Badge>
                      <Badge className="bg-gray-700 text-gray-300">2024-2025</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
                      <Cpu className="h-6 w-6 text-blue-400" />
                      Intelligence artificielle générative
                    </h3>
                    <p className="text-gray-400 mb-6">
                      En 2024, l'IA générative continue de révolutionner plusieurs secteurs. Des outils comme ChatGPT-5,
                      Adobe Firefly et MidJourney dominent le marché avec des applications dans la création de contenus,
                      le design et plus encore.
                    </p>
                    <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                      <ExternalLink className="mr-2 h-4 w-4" /> Lire l'article complet
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-blue-500 text-white">Sécurité</Badge>
                      <Badge className="bg-gray-700 text-gray-300">2024-2025</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
                      <Shield className="h-6 w-6 text-blue-400" />
                      Cybersécurité et protection des données
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Avec la multiplication des cyberattaques, la cybersécurité est devenue une priorité absolue pour
                      les entreprises et les particuliers. Les nouvelles méthodes de protection et les bonnes pratiques
                      évoluent constamment.
                    </p>
                    <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                      <ExternalLink className="mr-2 h-4 w-4" /> Lire l'article complet
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-blue-500 text-white">Cloud</Badge>
                      <Badge className="bg-gray-700 text-gray-300">2024-2025</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
                      <Cloud className="h-6 w-6 text-blue-400" />
                      Cloud computing et Edge computing
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Le Edge computing est essentiel pour les appareils IoT et les véhicules autonomes. Cette
                      technologie permet de traiter les données au plus près de leur source, réduisant ainsi la latence
                      et améliorant les performances des applications.
                    </p>
                    <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                      <ExternalLink className="mr-2 h-4 w-4" /> Lire l'article complet
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="juridique" className="mt-0 space-y-6">
                <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-blue-500 text-white">Réglementation</Badge>
                      <Badge className="bg-gray-700 text-gray-300">2024-2025</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
                      <Shield className="h-6 w-6 text-blue-400" />
                      Directive NIS 2
                    </h3>
                    <p className="text-gray-400 mb-6">
                      La directive européenne NIS 2 impose de nouvelles normes pour la cybersécurité. Elle élargit le
                      champ d'application et renforce les exigences en matière de sécurité des réseaux et des systèmes
                      d'information.
                    </p>
                    <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                      <ExternalLink className="mr-2 h-4 w-4" /> Lire l'article complet
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-blue-500 text-white">RGPD</Badge>
                      <Badge className="bg-gray-700 text-gray-300">2024-2025</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
                      <Scale className="h-6 w-6 text-blue-400" />
                      RGPD : nouvelles amendes
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Les amendes records liées au RGPD font la une des journaux. Les autorités de protection des
                      données sont de plus en plus strictes concernant l'application du règlement, avec des sanctions
                      financières importantes.
                    </p>
                    <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                      <ExternalLink className="mr-2 h-4 w-4" /> Lire l'article complet
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-blue-500 text-white">Protection</Badge>
                      <Badge className="bg-gray-700 text-gray-300">2024-2025</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
                      <Shield className="h-6 w-6 text-blue-400" />
                      Protection des données des mineurs
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Les réseaux sociaux doivent se conformer à des règles strictes en 2025. La protection des données
                      personnelles des mineurs est renforcée avec de nouvelles obligations pour les plateformes en
                      ligne.
                    </p>
                    <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                      <ExternalLink className="mr-2 h-4 w-4" /> Lire l'article complet
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
