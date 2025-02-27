'use client'

import { useDevice } from '@/lib/hooks/useDevice'
import RunesCollectionDesktop from './Desktop'
import RunesCollectionMobile from './Mobile'
import React from 'react'

interface RunesCollectionProps {
  isActive: boolean;
}

const RunesCollection: React.FC<RunesCollectionProps> = ({ isActive }) => {
  const { isMobile } = useDevice()

  return isMobile ? <RunesCollectionMobile isActive={isActive} /> : <RunesCollectionDesktop isActive={isActive}/>
}

export default RunesCollection
