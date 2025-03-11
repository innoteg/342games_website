"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track the scroll progress of the entire page
  const { scrollYProgress } = useScroll()

  // Transform the vertical scroll progress into horizontal movement
  // As we scroll down (0 to 1), move content from left (0%) to right (100%)
  const horizontalMovement = useTransform(
    scrollYProgress,
    [0, 0.5], // Input range (vertical scroll progress)
    ["0%", "100%"], // Output range (horizontal position)
  )

  // For demonstration, create some content items
  const items = [
    { id: 1, color: "bg-red-500", title: "Section 1" },
    { id: 2, color: "bg-blue-500", title: "Section 2" },
    { id: 3, color: "bg-green-500", title: "Section 3" },
    { id: 4, color: "bg-yellow-500", title: "Section 4" },
    { id: 5, color: "bg-purple-500", title: "Section 5" },
    { id: 6, color: "bg-pink-500", title: "Section 6" },
  ]

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 to-slate-700" aria-hidden="true" />

      {/* Vertical spacer to enable scrolling */}
      <div className="h-[300vh]">
        {/* Sticky container that holds horizontally moving content */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Introduction text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-md text-center text-white">
              <h1 className="mb-4 text-4xl font-bold">Scroll Down</h1>
              <p className="text-lg opacity-80">
                As you scroll vertically, the content below will move horizontally while the background stays fixed.
              </p>
            </div>
          </div>

          {/* Horizontally moving content */}
          <motion.div className="absolute bottom-20 flex w-[300vw] gap-8 px-8" style={{ x: horizontalMovement }}>
            {items.map((item) => (
              <motion.div
                key={item.id}
                className={`${item.color} flex h-64 w-80 flex-shrink-0 items-center justify-center rounded-xl p-6 text-white shadow-lg md:h-80 md:w-96`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2">Scroll to see horizontal movement</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

