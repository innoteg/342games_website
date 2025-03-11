"use client"

import { motion } from "framer-motion"
import type { Section } from "@/types/section"
import type { MouseEvent } from "react"

interface SectionNavigationProps {
  sections: Section[]
  activeSection: number
  setActiveSection: (index: number) => void
}

export default function SectionNavigation({ sections, activeSection, setActiveSection }: SectionNavigationProps) {
  const handleClick = (e: MouseEvent, index: number) => {
    e.preventDefault()
    setActiveSection(index)
  }

  return (
    <div className="flex flex-col md:flex-row items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-primary mr-8 mb-4 md:mb-0">Our Story</h1>

      <div className="flex flex-wrap gap-4">
        {sections.map((section, index) => (
          <div key={section.id} className="relative">
            <button
              onClick={(e) => handleClick(e, index)}
              className={`py-2 px-4 rounded-md transition-colors relative z-10 ${
                activeSection === index ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === index && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-primary rounded-md -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="text-base md:text-lg font-medium">{section.title}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

