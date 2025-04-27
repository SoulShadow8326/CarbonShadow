"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="section-container bg-gray-50">
      <h2 className="section-title">Interactive Dashboard</h2>

      <motion.p
        className="text-center text-[#1F2937] max-w-3xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Explore the relationship between technological advancement and CO₂ emissions across different countries and time
        periods.
      </motion.p>

      <motion.div
        className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <iframe
          src="/dashboard.html"
          className="w-full h-full rounded-xl"
          title="Emissions Dashboard"
          allowFullScreen
        />
      </motion.div>

      <div className="text-center">
        <a
          href="/dashboard.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#2E3A59] hover:text-[#FF6B6B] transition-colors duration-300"
        >
          <span className="mr-2">Open full dashboard in new window</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  )
}
