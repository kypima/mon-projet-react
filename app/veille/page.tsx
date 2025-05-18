"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Shield, Cpu, Scale } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import Image from "next/image"

export default function Veille() {
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
        title="Veille Informationnelle"
        subtitle="Restez à jour sur les dernières tendances technologiques et juridiques"
        gradient="from-blue-400 to-indigo-600"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                La veille informationnelle est essentielle dans le domaine de l'informatique pour rester à jour sur les
                évolutions technologiques et réglementaires. Découvrez ci-dessous ma veille technologique et juridique.
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

                <TabsContent value="technologique" className="mt-0 space-y-8">
                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src="/IA.png"
                          alt="Intelligence artificielle générative"
                          width={400}
                          height={600}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      </div>
                      <div className="md:col-span-2">
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
                            En 2024, l'IA générative continue de révolutionner plusieurs secteurs. Des outils comme
                            ChatGPT-5, Adobe Firefly et MidJourney dominent le marché avec des applications dans la
                            création de contenus, le design et plus encore. Les entreprises intègrent de plus en plus
                            ces technologies pour automatiser des tâches créatives et améliorer leur productivité.
                          </p>
                          <p className="text-gray-400 mb-6">
                            Source :{" "}
                            <a
                              href="http://techniques-ingenieur.fr/actualite/articles/les-tendances-majeures-de-lintelligence-artificielle-pour-les-ingenieurs-en-2024-131567/"
                              className="text-blue-400 hover:underline"
                            >
                              techniques-ingenieur.fr
                            </a>
                          </p>
                          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                            <ExternalLink className="mr-2 h-4 w-4" /> Lire l'article complet
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src="/Cyber.png"
                          alt="Cybersécurité"
                          width={400}
                          height={600}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      </div>
                      <div className="md:col-span-2">
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
                            Avec la multiplication des cyberattaques, la cybersécurité est devenue une priorité absolue
                            pour les entreprises et les particuliers. Les nouvelles méthodes de protection et les bonnes
                            pratiques évoluent constamment. Les attaques par ransomware ont augmenté de 150% en 2023,
                            ciblant particulièrement les infrastructures critiques et les PME.
                          </p>
                          <p className="text-gray-400 mb-6">
                            Source :{" "}
                            <a
                              href="https://synktory.com/reflexes-cybersecurite-en-entreprise/"
                              className="text-blue-400 hover:underline"
                            >
                              synktory.com
                            </a>
                          </p>
                          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                            <ExternalLink className="mr-2 h-4 w-4" /> Lire l'article complet
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src="/Quantique.png" 
                          alt="Informatique quantique"
                          width={400}
                          height={600}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      </div>
                      <div className="md:col-span-2">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className="bg-blue-500 text-white">Quantique</Badge>
                            <Badge className="bg-gray-700 text-gray-300">2024-2025</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
                            <Cpu className="h-6 w-6 text-blue-400" />
                            Informatique Quantique
                          </h3>
                          <p className="text-gray-400 mb-6">
                            L'informatique quantique progresse rapidement avec des avancées significatives dans le
                            développement de qubits stables. Les entreprises comme IBM, Google et Microsoft investissent
                            massivement dans cette technologie qui promet de révolutionner la cryptographie, la
                            modélisation moléculaire et l'optimisation des systèmes complexes.
                          </p>
                          <p className="text-gray-400 mb-6">
                            Source :{" "}
                            <a
                              href="https://www.ibm.com/fr-fr/topics/quantum-computing"
                              className="text-blue-400 hover:underline"
                            >
                              ibm.com
                            </a>
                          </p>
                          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                            <ExternalLink className="mr-2 h-4 w-4" /> Lire l'article complet
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="juridique" className="mt-0 space-y-8">
                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src="/NIS2.png"
                          alt="Directive NIS 2"
                          width={400}
                          height={600}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      </div>
                      <div className="md:col-span-2">
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
                            La directive européenne NIS 2 impose de nouvelles normes pour la cybersécurité. Elle élargit
                            le champ d'application et renforce les exigences en matière de sécurité des réseaux et des
                            systèmes d'information. Les entreprises concernées doivent mettre en place des mesures
                            techniques et organisationnelles pour gérer les risques et signaler les incidents majeurs.
                          </p>
                          <p className="text-gray-400 mb-6">
                            Source :{" "}
                            <a
                              href="https://cyber.gouv.fr/la-directive-nis-2"
                              className="text-blue-400 hover:underline"
                            >
                              cyber.gouv.fr
                            </a>
                          </p>
                          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                            <ExternalLink className="mr-2 h-4 w-4" /> Lire l'article complet
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src="/RGPD.jpeg"
                          alt="RGPD"
                          width={400}
                          height={600}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      </div>
                      <div className="md:col-span-2">
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
                            données sont de plus en plus strictes concernant l'application du règlement, avec des
                            sanctions financières importantes. En 2023, les amendes ont atteint un montant record de 2,5
                            milliards d'euros à l'échelle européenne.
                          </p>
                          <p className="text-gray-400 mb-6">
                            Source :{" "}
                            <a
                              href="https://secureprivacy.ai/fr/blog/amendes-rgpd"
                              className="text-blue-400 hover:underline"
                            >
                              secureprivacy.ai
                            </a>
                          </p>
                          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                            <ExternalLink className="mr-2 h-4 w-4" /> Lire l'article complet
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src="protection.png"
                          alt="Protection des mineurs"
                          width={400}
                          height={600}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      </div>
                      <div className="md:col-span-2">
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
                            Les réseaux sociaux doivent se conformer à des règles strictes en 2025. La protection des
                            données personnelles des mineurs est renforcée avec de nouvelles obligations pour les
                            plateformes en ligne. La CNIL a publié son plan stratégique 2025-2028 qui met l'accent sur
                            la protection des mineurs face aux risques numériques.
                          </p>
                          <p className="text-gray-400 mb-6">
                            Source :{" "}
                            <a
                              href="https://www.cnil.fr/fr/ia-mineurs-cybersecurite-quotidien-numerique-la-cnil-publie-son-plan-strategique-2025-2028"
                              className="text-blue-400 hover:underline"
                            >
                              cnil.fr
                            </a>
                          </p>
                          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                            <ExternalLink className="mr-2 h-4 w-4" /> Lire l'article complet
                          </Button>
                        </CardContent>
                      </div>
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
