"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { Section } from "@/types/section"

interface SectionBlockProps {
  section: Section
  isActive: boolean
  onClick: () => void
  isMobile?: boolean
}

export default function SectionBlock({ section, isActive, onClick, isMobile = false }: SectionBlockProps) {
  return (
    <div className="mb-6">
      {/* Title - Always Visible */}
      <motion.button
        onClick={onClick}
        className={`text-left block w-full py-3 px-4 rounded-md relative ${
          isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
        }`}
        whileHover={{ x: isActive ? 0 : 5 }}
        transition={{ duration: 0.2 }}
      >
        {/* {isActive && (
          <motion.div
            layoutId="activeTitleIndicator"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )} */}
        <span className="text-xl md:text-2xl">{section.title}</span>
      </motion.button>

      {/* Content - Only Visible When Active */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="pl-6 pr-4 py-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-base md:text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {section.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

