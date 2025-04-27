import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Emissions in the Age of Innovation",
  description: "Analyzing the Paradox Between Technological Progress and Global CO₂ Emissions",
    generator: 'Hooman'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${roboto.variable} font-sans`}>{children}</body>
    </html>
  )
}
