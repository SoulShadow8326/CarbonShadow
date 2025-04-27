"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const points = [
  "Technological advancements have not been decoupled from industrial demand.",
  "Global emissions are still driven by fossil-fuel-based industrial growth, particularly in developing economies.",
  "Innovation in clean technology needs to accelerate to outpace the emissions growth from economic development.",
  "Policy interventions and structural changes are necessary alongside technological solutions.",
]

export default function Conclusion() {
  return (
    <div className="py-16 md:py-24 bg-[#2E3A59] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusion
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-8">
            Our analysis reveals a fundamental disconnect between technological innovation and emissions reduction.
            Despite remarkable advancements in technology, the global economy continues to rely heavily on
            carbon-intensive processes, leading to persistent or even increasing emissions in many regions.
          </p>

          <div className="space-y-4 mb-8">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-[#4ECDC4] mr-3 mt-1 flex-shrink-0" size={20} />
                <p>{point}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-lg">
            The path forward requires not just incremental technological improvements, but transformative changes in how
            we produce and consume energy. This includes policy frameworks that incentivize clean technology adoption,
            structural economic changes, and shifts in consumption patterns across both developed and developing
            nations.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
