import { useState, useEffect } from 'react'

export function useDevice() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      if (mobileRegex.test(userAgent)) {
        setIsMobile(true)
        return
      }
      const width = window.innerWidth
      setIsMobile(width < 640)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return { isMobile }
} 