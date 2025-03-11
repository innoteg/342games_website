"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  isActive: boolean
  onClick: () => void
}

export default function SectionTitle({ title, isActive, onClick }: SectionTitleProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`text-left block w-full py-3 px-4 mb-2 rounded-md relative ${
        isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
      }`}
      whileHover={{ x: isActive ? 0 : 5 }}
      transition={{ duration: 0.2 }}
    >
      {isActive && (
        <motion.div
          layoutId="activeTitleIndicator"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="text-xl md:text-2xl">{title}</span>
    </motion.button>
  )
}

