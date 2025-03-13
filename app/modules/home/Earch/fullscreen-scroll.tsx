"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function DiagonalMotion() {
  const containerRef = useRef(null)

  // Array of sections with different colors and images
  const sections = [
    {
      title: "Mountain Landscapes",
      description: "Majestic mountain ranges with snow-capped peaks and lush valleys.",
      color: "bg-rose-500",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Ocean Views",
      description: "Serene ocean scenes with crystal clear waters and sandy beaches.",
      color: "bg-amber-500",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Forest Retreats",
      description: "Dense forests with towering trees and abundant wildlife.",
      color: "bg-emerald-500",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Desert Landscapes",
      description: "Vast desert expanses with stunning dunes and dramatic sunsets.",
      color: "bg-sky-500",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div ref={containerRef} className="h-[400vh] relative">
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          description={section.description}
          imageUrl={section.imageUrl}
          color={section.color}
          index={index}
          containerRef={containerRef}
          totalSections={sections.length}
        />
      ))}
    </div>
  )
}

interface SectionProps {
  title: string
  description: string
  imageUrl: string
  color: string
  index: number
  containerRef: any
  totalSections: number
}

function Section({ title, description, imageUrl, color, index, containerRef, totalSections }: SectionProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  })

  // Adjust phases to make exit animation longer:
  // 1. Entry phase (20% of section time)
  // 2. Center display phase (40% of section time)
  // 3. Exit phase (40% of section time) - now longer
  const sectionSize = 1 / totalSections
  const sectionStart = index * sectionSize
  const entryStart = sectionStart
  const entryEnd = sectionStart + sectionSize * 0.2
  const centerStart = entryEnd
  const centerEnd = sectionStart + sectionSize * 0.6 // Reduced to 40% from 50%
  const exitStart = centerEnd
  const exitEnd = sectionStart + sectionSize

  // Background opacity for the whole section
  const bgOpacity = useTransform(
    scrollYProgress,
    [sectionStart, sectionStart + 0.02, exitEnd - 0.02, exitEnd],
    [0, 1, 1, 0],
  )

  // Content opacity with separate control for entry, center, and exit
  const contentOpacity = useTransform(
    scrollYProgress,
    [
      entryStart,
      entryStart + 0.02, // Start fade in
      entryEnd - 0.02,
      entryEnd, // End fade in
      centerStart,
      centerEnd, // Stay visible in center
      exitStart,
      exitStart + 0.02, // Start fade out
      exitEnd - 0.02,
      exitEnd, // End fade out
    ],
    [0, 0.5, 1, 1, 1, 1, 1, 0.8, 0.2, 0],
  )

  // X position: right to center, then center to left
  // Make the exit animation more gradual
  const x = useTransform(
    scrollYProgress,
    [
      entryStart,
      entryEnd, // Entry phase
      centerStart,
      centerEnd, // Center phase
      exitStart,
      exitStart + sectionSize * 0.2,
      exitStart + sectionSize * 0.3,
      exitEnd, // Extended exit phase
    ],
    [300, 0, 0, 0, 0, -100, -200, -300],
  )

  // Y position: bottom to center, then center to top
  // Make the exit animation more gradual
  const y = useTransform(
    scrollYProgress,
    [
      entryStart,
      entryEnd, // Entry phase
      centerStart,
      centerEnd, // Center phase
      exitStart,
      exitStart + sectionSize * 0.2,
      exitStart + sectionSize * 0.3,
      exitEnd, // Extended exit phase
    ],
    [300, 0, 0, 0, 0, -100, -200, -300],
  )

  // Scale: small to normal, then normal to small
  const scale = useTransform(
    scrollYProgress,
    [
      entryStart,
      entryEnd, // Entry phase
      centerStart,
      centerEnd, // Center phase
      exitStart,
      exitEnd, // Exit phase
    ],
    [0.6, 1, 1, 1, 1, 0.6],
  )

  return (
    <motion.div
      className={`fixed inset-0 flex items-center justify-center`}
      // style={{
      //   opacity: bgOpacity,
      // }}
    >
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl w-full max-w-5xl h-[500px] relative overflow-hidden"
        style={{
          x,
          y,
          scale,
          opacity: contentOpacity,
        }}
      >
        {/* Image in top right */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 p-6">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
        </div>

        {/* Text in bottom left */}
        <div className="absolute bottom-0 left-0 w-1/2 p-8">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/90 text-lg mb-6">{description}</p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full transition-colors">
            Learn More
          </button>
        </div>

      </motion.div>
    </motion.div>
  )
}

