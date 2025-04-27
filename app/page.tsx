"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import EmissionsChart from "@/components/emissions-chart"
import CountryComparisonChart from "@/components/country-comparison-chart"
import TechEmissionsTimeline from "@/components/tech-emissions-timeline"
import GlobeVisualization from "@/components/globe-visualization"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const insightsRef = useRef(null)
  const dashboardRef = useRef(null)
  const conclusionRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const sections = [
      { id: "hero", ref: heroRef },
      { id: "about", ref: aboutRef },
      { id: "insights", ref: insightsRef },
      { id: "dashboard", ref: dashboardRef },
      { id: "conclusion", ref: conclusionRef },
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = section.ref.current
        if (!element) continue

        const rect = element.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionBottom = sectionTop + rect.height

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#2E3A59]/90 to-[#2E3A59]/80 backdrop-blur-md text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
            <div className="w-3 h-3 rounded-full bg-[#4ECDC4]"></div>
            <h1 className="text-lg font-bold ml-2">Emissions & Innovation</h1>
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "insights", label: "Insights" },
              { id: "dashboard", label: "Dashboard" },
              { id: "conclusion", label: "Conclusion" },
            ].map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id ? "text-[#4ECDC4]" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2E3A59] to-[#1F2937]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

          {/* Animated particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#4ECDC4]/20"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 p-1 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="bg-[#2E3A59] rounded-full px-4 py-1">
              <span className="text-white text-sm font-medium">Data-Driven Analysis</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Emissions in the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
              Age of Innovation
            </span>
          </h1>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Exploring the paradox between technological advancement and global CO₂ emissions in the modern era.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#insights"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FF6B6B]/80 text-white font-medium transition-transform hover:scale-105"
            >
              Key Insights
            </Link>
            <Link
              href="#dashboard"
              className="px-8 py-3 rounded-full bg-white/10 text-white font-medium backdrop-blur-sm border border-white/20 transition-transform hover:scale-105"
            >
              View Dashboard
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 text-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <Link href="#about" className="inline-flex flex-col items-center">
            <span className="text-sm mb-2 text-white/60">Scroll to continue</span>
            <ArrowDown size={20} className="text-white/60" />
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#1F2937] to-transparent opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4 px-4 py-1 bg-[#4ECDC4]/10 rounded-full">
                <span className="text-[#4ECDC4] font-medium">The Project</span>
              </div>

              <h2 className="text-4xl font-bold text-[#2E3A59] mb-6">
                Understanding the <span className="text-[#FF6B6B]">Paradox</span>
              </h2>

              <p className="text-[#1F2937] mb-6 text-lg">
                Despite remarkable advancements in AI, automation, and clean energy technologies, global CO₂ emissions
                continue to rise in many industrialized nations.
              </p>

              <p className="text-[#1F2937] mb-6">
                This project analyzes how technological leaders like the United States, China, Germany, and Japan
                contribute to global emissions patterns, and explores why technological progress hasn't translated to
                significant emissions reductions.
              </p>

              <div className="flex items-center mt-8">
                <Link
                  href="#insights"
                  className="flex items-center text-[#2E3A59] font-medium hover:text-[#FF6B6B] transition-colors"
                >
                  <span>Explore our findings</span>
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TechEmissionsTimeline />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section id="insights" ref={insightsRef} className="relative py-24 bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-[#FF6B6B]/10 rounded-full">
              <span className="text-[#FF6B6B] font-medium">Data Analysis</span>
            </div>

            <h2 className="text-4xl font-bold text-[#2E3A59] mb-6">Key Insights</h2>

            <p className="text-[#1F2937] max-w-2xl mx-auto">
              Our analysis reveals critical patterns in the relationship between technological advancement and emissions
              across major economies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2E3A59] mb-3">Global Emissions Trends</h3>
                <p className="text-[#1F2937] mb-4">
                  Despite technological advancements, CO₂ emissions have not decreased significantly in leading
                  industrial nations.
                </p>
              </div>
              <div className="h-80 p-4">
                <EmissionsChart />
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2E3A59] mb-3">Country Comparison</h3>
                <p className="text-[#1F2937] mb-4">
                  The post-1950 surge in global emissions has been dominated by Asia, with China overtaking the US
                  around 2005.
                </p>
              </div>
              <div className="h-80 p-4">
                <CountryComparisonChart />
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2E3A59] mb-3">GDP and CO₂ Per Capita</h3>
                <p className="text-[#1F2937] mb-4">
                  Economic growth remains tightly linked to CO₂ emissions, particularly in emerging markets where
                  industrialization is ramping up.
                </p>
              </div>
              <div className="h-80 p-4">
                <GlobeVisualization />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" ref={dashboardRef} className="relative py-24 bg-[#2E3A59] text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-white/10 rounded-full backdrop-blur-sm">
              <span className="text-white font-medium">Interactive Data</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Explore the <span className="text-[#4ECDC4]">Dashboard</span>
            </h2>

            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Dive into our interactive dashboard to explore the relationship between technological advancement and CO₂
              emissions across different countries and time periods.
            </p>
          </div>

          <motion.div
            className="relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="/dashboard.html" className="w-full h-full" title="Emissions Dashboard" allowFullScreen />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section
        id="conclusion"
        ref={conclusionRef}
        className="relative py-24 bg-gradient-to-br from-[#1F2937] to-[#2E3A59]"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block mb-4 px-4 py-1 bg-white/10 rounded-full">
              <span className="text-white/80 font-medium">Conclusion</span>
            </div>

            <h2 className="text-4xl font-bold text-white mb-6">
              The Path <span className="text-[#4ECDC4]">Forward</span>
            </h2>

            <p className="text-white/80 mb-8">
              Our analysis reveals a fundamental disconnect between technological innovation and emissions reduction.
              Despite remarkable advancements in technology, the global economy continues to rely heavily on
              carbon-intensive processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Technological advancements have not been decoupled from industrial demand",
              "Global emissions are still driven by fossil-fuel-based industrial growth",
              "Innovation in clean technology needs to accelerate to outpace emissions growth",
              "Policy interventions and structural changes are necessary alongside technological solutions",
            ].map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-white/5 backdrop-blur-sm p-4 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-full bg-[#4ECDC4] flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-white/90">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-1 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
                <div className="w-3 h-3 rounded-full bg-[#4ECDC4]"></div>
                <h3 className="text-lg font-bold ml-2">Emissions & Innovation</h3>
              </div>
              <p className="text-white/60 mb-4">
                Analyzing the Paradox Between Technological Progress and Global CO₂ Emissions
              </p>
              <p className="text-white/60">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Data Sources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://ourworldindata.org/co2-emissions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#4ECDC4] transition-colors"
                  >
                    Our World in Data
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.globalcarbonproject.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#4ECDC4] transition-colors"
                  >
                    Global Carbon Project
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kaggle.com/datasets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#4ECDC4] transition-colors"
                  >
                    Kaggle Datasets
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
