'use client'

import React from 'react'
import { useDevice } from '@/lib/hooks/useDevice'
import RunesCollectionDesktop from './Desktop'
import RunesCollectionMobile from './Mobile'

interface TokenmicsProps {
  isActive: boolean;
}

const Tokenmics: React.FC<TokenmicsProps> = ({ isActive }) => {
  const { isMobile } = useDevice()

  return isMobile ? <RunesCollectionMobile /> : <RunesCollectionDesktop />
}

export default Tokenmics
