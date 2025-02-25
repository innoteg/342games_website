'use client'

import { useDevice } from '@/lib/hooks/useDevice'
import DesktopHeader from './Desktop'
import MobileHeader from './Mobile'

export default function Header() {
  const { isMobile } = useDevice()

  return isMobile ? <MobileHeader /> : <DesktopHeader />
}
