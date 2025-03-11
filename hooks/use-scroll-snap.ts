"use client"

import { useEffect, useRef } from "react"

export function useScrollSnap(
  callback: (direction: "up" | "down") => void,
  options = { threshold: 50, cooldown: 500 },
) {
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentTime = Date.now()
      const currentScrollY = window.scrollY
      const { threshold, cooldown } = options

      // Check if we're in cooldown period
      if (currentTime - lastScrollTime.current < cooldown) {
        return
      }

      // Calculate scroll difference
      const scrollDifference = currentScrollY - lastScrollY.current

      // If scroll amount exceeds threshold, trigger callback
      if (Math.abs(scrollDifference) > threshold) {
        const direction = scrollDifference > 0 ? "down" : "up"
        callback(direction)
        lastScrollTime.current = currentTime
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [callback, options])
}

