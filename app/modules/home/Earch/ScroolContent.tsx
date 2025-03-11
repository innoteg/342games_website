"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { sections } from "./scrllContent/data"
import ProgressBar from "./scrllContent/progress-bar"
import SectionBlock from "./scrllContent/section-block"
import { useIsMobile } from "../../../hooks/use-mobile"

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const isScrolling = useRef(false)
  const isMobile = useIsMobile()

  // Handle scroll events to change active section
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (isScrolling.current) return
      isScrolling.current = true

      // Determine scroll direction
      const direction = e.deltaY > 0 ? 1 : -1

      setActiveSection((prev) => {
        const next = Math.max(0, Math.min(sections.length - 1, prev + direction))
        return next
      })

      // Debounce scroll events
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false
      }, 500)
    }

    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel)
      }
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setActiveSection((prev) => Math.min(sections.length - 1, prev + 1))
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setActiveSection((prev) => Math.max(0, prev - 1))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <main ref={scrollRef} className="w-full h-screen flex overflow-hidden bg-background mt-[100px] sm:mt-0">
      {/* Progress Bar - Left Side */}
      <div className="hidden md:block w-16 h-full ">
        <ProgressBar
          activeSection={activeSection}
          totalSections={sections.length}
          setActiveSection={setActiveSection}
        />
      </div>

      {isMobile ? (
        // Mobile Layout - Vertical
        <div className="flex-1 flex flex-col">
          {/* Top Section - Progress, Titles and Content */}
          <div className="w-full p-4">
            {/* Mobile Progress Bar */}
            <div className="mb-4">
              <ProgressBar
                activeSection={activeSection}
                totalSections={sections.length}
                setActiveSection={setActiveSection}
                orientation="horizontal"
              />
            </div>

            {/* Titles and Content */}
            <div className="mb-6">
              {sections.map((section, index) => (
                <SectionBlock
                  key={section.id}
                  section={section}
                  isActive={activeSection === index}
                  onClick={() => setActiveSection(index)}
                  isMobile={true}
                />
              ))}
            </div>
          </div>

          {/* Bottom Section - Image */}
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${sections[activeSection].id}`}
                className="w-full h-full relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={sections[activeSection].imageUrl || "/placeholder.svg"}
                  alt={sections[activeSection].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        // Desktop Layout - Horizontal
        <div className="flex-1 flex">
          {/* Middle Section - Titles and Content */}
          <div className="w-1/2 h-full p-8 overflow-y-auto">
            <div className="space-y-6">
              {sections.map((section, index) => (
                <SectionBlock
                  key={section.id}
                  section={section}
                  isActive={activeSection === index}
                  onClick={() => setActiveSection(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-1/2 h-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${sections[activeSection].id}`}
                className="w-full h-full relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={sections[activeSection].imageUrl || "/placeholder.svg"}
                  alt={sections[activeSection].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </main>
  )
}

