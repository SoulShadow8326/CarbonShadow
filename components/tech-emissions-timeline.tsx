"use client"

import { motion } from "framer-motion"

const timelineEvents = [
  {
    year: "1750-1900",
    title: "Industrial Revolution",
    description: "Coal-powered steam engines drive early industrialization, beginning the rise in CO₂ emissions.",
    icon: "🏭",
  },
  {
    year: "1950s",
    title: "Post-War Boom",
    description: "Mass production and consumption lead to rapid increases in global emissions.",
    icon: "🚗",
  },
  {
    year: "1980s",
    title: "Digital Revolution",
    description: "Computing advances, but emissions continue to rise with economic growth.",
    icon: "💻",
  },
  {
    year: "2000s",
    title: "Internet Age",
    description: "Despite digital efficiency, global emissions accelerate with China's industrial growth.",
    icon: "🌐",
  },
  {
    year: "2010s",
    title: "AI & Automation",
    description: "Advanced technology spreads globally, yet emissions reach record levels.",
    icon: "🤖",
  },
  {
    year: "Present",
    title: "The Paradox",
    description: "Despite technological sophistication, emissions continue to rise in most regions.",
    icon: "⚠️",
  },
]

export default function TechEmissionsTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#FF6B6B] to-[#4ECDC4]"></div>

      <div className="space-y-12 relative">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="flex"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex-shrink-0 relative">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center z-10 relative">
                <span className="text-2xl">{event.icon}</span>
              </div>
              <div className="absolute top-1/2 left-8 w-8 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
            </div>

            <div className="ml-6 bg-white rounded-xl shadow-md p-5 flex-1">
              <div className="text-sm font-medium text-[#4ECDC4] mb-1">{event.year}</div>
              <h3 className="text-lg font-bold text-[#2E3A59] mb-2">{event.title}</h3>
              <p className="text-[#1F2937]">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
