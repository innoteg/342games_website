"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ScrollIndicatorProps {
  activeSection: number
  totalSections: number
  setActiveSection: (index: number) => void
}

export default function ScrollIndicator({ activeSection, totalSections, setActiveSection }: ScrollIndicatorProps) {
  const goToPrevious = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1)
    }
  }

  const goToNext = () => {
    if (activeSection < totalSections - 1) {
      setActiveSection(activeSection + 1)
    }
  }

  return (
    <div className="flex items-center space-x-6">
      <button
        onClick={goToPrevious}
        disabled={activeSection === 0}
        className={`p-2 rounded-full ${
          activeSection === 0 ? "text-muted-foreground cursor-not-allowed" : "text-primary hover:bg-primary/10"
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex space-x-2">
        {Array.from({ length: totalSections }).map((_, index) => (
          <motion.button
            key={index}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              activeSection === index ? "bg-primary" : "bg-muted hover:bg-muted-foreground"
            }`}
            animate={{ scale: activeSection === index ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveSection(index)}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={goToNext}
        disabled={activeSection === totalSections - 1}
        className={`p-2 rounded-full ${
          activeSection === totalSections - 1
            ? "text-muted-foreground cursor-not-allowed"
            : "text-primary hover:bg-primary/10"
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

