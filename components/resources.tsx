"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FileText, Database, Video } from "lucide-react"

const dataSources = [
  {
    name: "Our World in Data (OWID)",
    url: "https://ourworldindata.org/co2-emissions",
    description: "Comprehensive data on CO₂ emissions across countries and time periods.",
  },
  {
    name: "Global Carbon Project",
    url: "https://www.globalcarbonproject.org/",
    description: "Annual updates on the global carbon budget and emissions trends.",
  },
  {
    name: "Kaggle Datasets",
    url: "https://www.kaggle.com/datasets",
    description: "Various datasets on emissions, technology adoption, and economic indicators.",
  },
]

const downloadableResources = [
  {
    name: "Raw CO₂ Emissions Dataset",
    url: "#",
    description: "CSV file containing historical CO₂ emissions data by country (1750-2023).",
  },
  {
    name: "Technology Adoption Index",
    url: "#",
    description: "Dataset measuring technology adoption rates across major economies.",
  },
  {
    name: "Analysis Notebook",
    url: "#",
    description: "Jupyter notebook with the complete data analysis and visualization code.",
  },
]

export default function Resources() {
  return (
    <div className="section-container">
      <h2 className="section-title">Resources</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Data Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <Database className="text-[#FF6B6B] mr-3" size={24} />
            <h3 className="text-xl font-bold text-[#2E3A59]">Data Sources</h3>
          </div>

          <div className="space-y-6">
            {dataSources.map((source) => (
              <div key={source.name}>
                <Link
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-[#2E3A59] hover:text-[#FF6B6B] transition-colors duration-300"
                >
                  {source.name}
                </Link>
                <p className="text-[#1F2937] mt-1">{source.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Downloadable Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <FileText className="text-[#4ECDC4] mr-3" size={24} />
            <h3 className="text-xl font-bold text-[#2E3A59]">Downloadable Resources</h3>
          </div>

          <div className="space-y-6">
            {downloadableResources.map((resource) => (
              <div key={resource.name}>
                <Link
                  href={resource.url}
                  className="text-lg font-medium text-[#2E3A59] hover:text-[#4ECDC4] transition-colors duration-300"
                >
                  {resource.name}
                </Link>
                <p className="text-[#1F2937] mt-1">{resource.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Video Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <Video className="text-[#2E3A59] mr-3" size={24} />
            <h3 className="text-xl font-bold text-[#2E3A59]">Video Summary</h3>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <div className="flex items-center justify-center bg-gray-200 w-full h-full">
                <p className="text-[#1F2937]">Video summary coming soon</p>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-[#2E3A59]">Project Overview</h4>
              <p className="text-sm text-[#1F2937] mt-1">
                A 3-minute video summarizing the project's findings and methodology.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
