'use client'

import { useDevice } from '@/lib/hooks/useDevice'
import DesktopBanner from './Desktop'
import MobileBanner from './Mobile'

export default function Banner() {
  const { isMobile } = useDevice()

  return isMobile ? <MobileBanner /> : <DesktopBanner />
}
