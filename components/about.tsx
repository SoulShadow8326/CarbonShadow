"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <div className="section-container bg-white">
      <h2 className="section-title">About the Project</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#2E3A59] mb-4">The Paradox of Technological Progress</h3>

          <p className="text-[#1F2937] mb-4">
            This project focuses on the complex relationship between global technological advancements and CO₂
            emissions. Despite remarkable progress in AI, automation, and clean energy technologies, emissions continue
            to rise in many industrialized nations.
          </p>

          <p className="text-[#1F2937] mb-4">
            We analyze how countries like the United States, China, Germany, and Japan—leaders in technological
            innovation—contribute to global emissions patterns, and explore why technological progress hasn't translated
            to significant emissions reductions.
          </p>

          <p className="text-[#1F2937]">
            As technology continues to advance at an unprecedented pace, understanding this paradox becomes increasingly
            important for developing effective climate policies and sustainable development strategies.
          </p>
        </motion.div>

        <motion.div
          className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#A1C4FD]/20 to-[#C2E9FB]/20 z-10"></div>
          <div className="relative h-full w-full">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Timeline of industrialization and emissions"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-[#2E3A59]/80 to-transparent z-20">
              <p className="text-white text-sm">
                Timeline showing the rise of industrialization and emissions from 1750 to 2023
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
