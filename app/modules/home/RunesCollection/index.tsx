'use client'

import { useDevice } from '@/lib/hooks/useDevice'
import RunesCollectionDesktop from './Desktop'
import RunesCollectionMobile from './Mobile'

export default function RunesCollection() {
  const { isMobile } = useDevice()

  return isMobile ? <RunesCollectionMobile /> : <RunesCollectionDesktop />
}
