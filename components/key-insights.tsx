"use client"

import { motion } from "framer-motion"
import { Factory, Globe, BarChart3 } from "lucide-react"

const insights = [
  {
    title: "Technological Growth vs. CO₂ Emissions",
    icon: Factory,
    description:
      "Despite advancements in automation and AI, CO₂ emissions have not decreased significantly in leading industrial nations. The efficiency gains from technology are often offset by increased production and consumption.",
    color: "#FF6B6B",
  },
  {
    title: "Regional Emissions Trends",
    icon: Globe,
    description:
      "The post-1950 surge in global emissions has been dominated by Asia, with China overtaking the US in CO₂ emissions around 2005. This shift reflects changing patterns of global manufacturing and energy consumption.",
    color: "#4ECDC4",
  },
  {
    title: "GDP and CO₂ Per Capita",
    icon: BarChart3,
    description:
      "Economic growth still tightly linked to CO₂ emissions, particularly in emerging markets where industrialization is ramping up. The challenge remains to decouple economic prosperity from carbon intensity.",
    color: "#2E3A59",
  },
]

export default function KeyInsights() {
  return (
    <div className="section-container">
      <h2 className="section-title">Key Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
              style={{ backgroundColor: `${insight.color}20` }}
            >
              <insight.icon size={32} style={{ color: insight.color }} />
            </div>

            <h3 className="text-xl font-bold text-center text-[#2E3A59] mb-4">{insight.title}</h3>

            <p className="text-[#1F2937] text-center">{insight.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
