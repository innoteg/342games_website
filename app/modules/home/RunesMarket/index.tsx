'use client'

import RunesCollectionDesktop from './Desktop'
import RunesCollectionMobile from './Mobile'
import React from 'react'

interface RunesCollectionProps {
  isActive: boolean;
}

const RunesCollection: React.FC<RunesCollectionProps> = ({ isActive }) => {
  return (
    <>
      <RunesCollectionMobile isActive={isActive} />
      <RunesCollectionDesktop isActive={isActive} />
    </>
  )
}

export default RunesCollection
