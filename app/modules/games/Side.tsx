"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "../../../hooks/use-mobile"


export default function Home() {
  const sections = [
    { id: "section1", title: "Section 1", content: "This is the content for section 1." },
    { id: "section2", title: "Section 2", content: "This is the content for section 2." },
    { id: "section3", title: "Section 3", content: "This is the content for section 3." },
    { id: "section4", title: "Section 4", content: "This is the content for section 4." },
    { id: "section5", title: "Section 5", content: "This is the content for section 5." },
  ]

  const isMobile = useIsMobile()

  return (
    <main className="min-h-screen">
      <SidebarProgress sections={sections} />

      {isMobile ? (
        // Mobile layout - stacked
        <div className="flex flex-col">
          <div className="w-full overflow-y-auto p-4">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="min-h-[80vh] mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p>{section.content}</p>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <div className="aspect-video bg-muted rounded-lg"></div>
                    <div className="aspect-video bg-muted rounded-lg"></div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="w-full p-4">
            <Carousel />
          </div>
        </div>
      ) : (
        // Desktop layout - 50/50 split
        <div className="flex flex-1">
          <div className="w-1/2 overflow-y-auto p-8">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="min-h-[80vh] mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p>{section.content}</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="aspect-video bg-muted rounded-lg"></div>
                    <div className="aspect-video bg-muted rounded-lg"></div>
                    <div className="aspect-video bg-muted rounded-lg"></div>
                    <div className="aspect-video bg-muted rounded-lg"></div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="w-1/2 p-8">
            <div className="sticky top-8 h-[calc(100vh-4rem)]">
              <Carousel />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { id: 1, color: "bg-blue-100" },
    { id: 2, color: "bg-green-100" },
    { id: 3, color: "bg-yellow-100" },
    { id: 4, color: "bg-red-100" },
    { id: 5, color: "bg-purple-100" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="relative h-full rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex transition-all duration-500 ease-in-out">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={cn("min-w-full h-full flex items-center justify-center text-2xl font-bold", slide.color)}
            initial={{ x: `${(index - currentSlide) * 100}%` }}
            animate={{ x: `${(index - currentSlide) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            Slide {slide.id}
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={cn("w-3 h-3 rounded-full", currentSlide === index ? "bg-primary" : "bg-muted")}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

interface SidebarProgressProps {
  sections: { id: string; title: string; content: string }[]
}

function SidebarProgress({ sections }: SidebarProgressProps) {
  const [activeSection, setActiveSection] = useState<string>("")
  const observerRefs = useRef<IntersectionObserver[]>([])

  useEffect(() => {
    // Clean up previous observers
    observerRefs.current.forEach((observer) => observer.disconnect())
    observerRefs.current = []

    // Create new observers for each section
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section.id)
            }
          })
        },
        { threshold: 0.5 }, // Trigger when 50% of the section is visible
      )

      observer.observe(element)
      observerRefs.current.push(observer)
    })

    return () => {
      observerRefs.current.forEach((observer) => observer.disconnect())
    }
  }, [sections])

  return (
    <div className="fixed left-0 top-0 h-full flex items-center z-10">
      <div className="h-[60%] flex flex-col items-center">
        <div className="w-[2px] h-full bg-muted relative">
          <motion.div
            className="absolute w-full bg-primary"
            style={{
              top: 0,
              height: `${100 / sections.length}%`,
            }}
            animate={{
              top: `${sections.findIndex((s) => s.id === activeSection) * (100 / sections.length)}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
        <div className="absolute left-0 h-full flex flex-col justify-between py-8">
          {sections.map((section, index) => (
            <a key={section.id} href={`#${section.id}`} className="group flex items-center">
              <motion.div
                className={cn(
                  "w-4 h-4 rounded-full border-2 border-muted flex items-center justify-center mr-2",
                  activeSection === section.id ? "border-primary" : "border-muted",
                )}
                whileHover={{ scale: 1.2 }}
              >
                <motion.div
                  className={cn(
                    "w-2 h-2 rounded-full",
                    activeSection === section.id ? "bg-primary" : "bg-transparent group-hover:bg-muted/50",
                  )}
                />
              </motion.div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">{section.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

