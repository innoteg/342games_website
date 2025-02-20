'use client'

import { useThemeStore } from '@/lib/stores'

export function ThemeProvider({
  children
}: {
  children: React.ReactNode
}) {
  const theme = useThemeStore((state) => state.theme)
  
  return (
    <html lang="en" className={theme}>
      {children}
    </html>
  )
} 