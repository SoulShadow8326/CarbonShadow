"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Key Insights", href: "#key-insights" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Conclusion", href: "#conclusion" },
  { name: "Resources", href: "#resources" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="#home" className="text-[#2E3A59] font-inter font-bold text-xl md:text-2xl">
              Emissions in the Age of Innovation
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-[#2E3A59] hover:text-[#FF6B6B] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#1F2937] hover:text-[#FF6B6B] px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`${isOpen ? "fixed inset-0 z-40 overflow-y-auto" : "hidden"} md:hidden`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsOpen(false)} />
        <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#2E3A59]">Navigation</h2>
              <button
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center text-[#2E3A59] hover:text-[#FF6B6B] focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[#1F2937] hover:text-[#FF6B6B] px-3 py-2 text-base font-medium transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
