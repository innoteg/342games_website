"use client"

import { motion } from "framer-motion"

interface ProgressBarProps {
  activeSection: number
  totalSections: number
  setActiveSection: (index: number) => void
  orientation?: "vertical" | "horizontal"
}

export default function ProgressBar({
  activeSection,
  totalSections,
  setActiveSection,
  orientation = "vertical",
}: ProgressBarProps) {
  const isVertical = orientation === "vertical"

  return (
    <div
      className={`flex ${
        isVertical ? "flex-col h-full justify-center items-center" : "flex-row w-full justify-between items-center"
      }`}
    >
      <div className={`relative ${isVertical ? "h-3/4 w-[2px]" : "w-full h-0.5"} bg-muted`}>
        {/* Progress Indicator */}
        <motion.div
          className={`absolute bg-primary ${
            isVertical ? "w-1.5 left-1/2 -translate-x-1/2 top-0" : "h-1.5 top-1/2 -translate-y-1/2 left-0"
          }`}
          style={
            isVertical
              ? {
                  height: `${((activeSection + 1) / totalSections) * 100}%`,
                }
              : {
                  width: `${((activeSection + 1) / totalSections) * 100}%`,
                }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Section Markers */}
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSection(index)}
            className={`absolute ${
              isVertical ? "w-4 h-4 left-1/2 -translate-x-1/2" : "h-4 w-4 top-1/2 -translate-y-1/2"
            } rounded-full border-2 border-background ${
              index <= activeSection ? "bg-primary" : "bg-muted"
            } transition-colors cursor-pointer z-10`}
            style={
              isVertical
                ? { top: `${(index / (totalSections - 1)) * 100}%` }
                : { left: `${(index / (totalSections - 1)) * 100}%` }
            }
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

