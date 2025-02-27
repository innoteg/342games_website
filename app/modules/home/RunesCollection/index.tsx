'use client'

import React from 'react'
import { useDevice } from '@/lib/hooks/useDevice'
import RunesCollectionDesktop from './Desktop'
import RunesCollectionMobile from './Mobile'

interface RunesCollectionProps {
  isActive: boolean;
}

const RunesCollection: React.FC<RunesCollectionProps> = ({ isActive }) => {
  const { isMobile } = useDevice()

  return isMobile ? <RunesCollectionMobile isActive={isActive} /> : <RunesCollectionDesktop isActive={isActive}/>
}

export default RunesCollection