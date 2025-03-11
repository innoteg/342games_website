"use client"

import { motion } from "framer-motion"

interface SectionContentProps {
  section: any
  isMobile?: boolean
}

export default function SectionContent({ section, isMobile = false }: SectionContentProps) {
  return (
    <motion.div
      className={`${isMobile ? "w-full" : "max-w-xl"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className="text-base md:text-lg text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {section.description}
      </motion.p>
    </motion.div>
  )
}

