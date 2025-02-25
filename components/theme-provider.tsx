'use client'

import { useThemeStore } from '@/lib/stores'

export function ThemeProvider({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  const theme = useThemeStore((state) => state.theme)
  
  return (
    <div className={`${theme} ${className || ''}`}>
      {children}
    </div>
  )
} 