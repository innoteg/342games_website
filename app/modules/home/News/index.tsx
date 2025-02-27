'use client'

import React from 'react'
import { useDevice } from '@/lib/hooks/useDevice'
import RunesCollectionDesktop from './Desktop'
import RunesCollectionMobile from './Mobile'

interface NewsProps {
  isActive: boolean;
}

const News: React.FC<NewsProps> = ({ isActive }) => {
  const { isMobile } = useDevice()

  return isMobile ? <RunesCollectionMobile /> : <RunesCollectionDesktop />
}

export default News
