"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [containerWidth, setContainerWidth] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)

  const { scrollXProgress } = useScroll({
    container: containerRef,
  })

  const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [0, 1, 0])

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
        setScrollWidth(containerRef.current.scrollWidth)
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Check scroll position to show/hide arrows
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -containerWidth / 2, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: containerWidth / 2, behavior: "smooth" })
    }
  }

  // Example items for the scroll container
  const items = [
    { id: 1, color: "bg-red-500", title: "Item 1" },
    { id: 2, color: "bg-blue-500", title: "Item 2" },
    { id: 3, color: "bg-green-500", title: "Item 3" },
    { id: 4, color: "bg-yellow-500", title: "Item 4" },
    { id: 5, color: "bg-purple-500", title: "Item 5" },
    { id: 6, color: "bg-pink-500", title: "Item 6" },
    { id: 7, color: "bg-indigo-500", title: "Item 7" },
    { id: 8, color: "bg-orange-500", title: "Item 8" },
  ]

  return (
    <div className="relative w-full max-w-full overflow-hidden py-8">
      {/* Navigation arrows */}
      {showLeftArrow && (
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full shadow-lg"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      )}

      {showRightArrow && (
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full shadow-lg"
          onClick={scrollRight}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      )}

      {/* Progress indicator */}
      <motion.div className="absolute bottom-2 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-full bg-primary/30">
        <motion.div
          className="h-full rounded-full bg-primary"
          style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
        />
      </motion.div>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pt-2 scrollbar-hide"
        onScroll={handleScroll}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`${item.color} flex min-h-[200px] min-w-[280px] snap-center flex-col items-center justify-center rounded-xl p-6 text-white shadow-lg md:min-w-[320px]`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="mt-2 text-center">Scroll horizontally to see more items</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

