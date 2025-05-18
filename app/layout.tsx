import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kylian Marras | Portfolio BTS SIO SISR",
  description: "Portfolio professionnel de Kylian Marras, étudiant en BTS SIO option SISR",
    generator: 'v0.dev'
}

export const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "placehold.co",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            <Suspense>
              <Navbar />
              <main className="pt-20 pb-20">{children}</main>
              <Footer />
              <SpeedInsights />
              <Analytics />
            </Suspense>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
