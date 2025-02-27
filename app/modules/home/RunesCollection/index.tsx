'use client'

import React from 'react'
import RunesCollectionDesktop from './Desktop'
import RunesCollectionMobile from './Mobile'

interface RunesCollectionProps {
  isActive: boolean;
}

const RunesCollection: React.FC<RunesCollectionProps> = ({ isActive }) => {
  console.log(isActive)
  return (
    <>
      <RunesCollectionMobile isActive={isActive} />
      <RunesCollectionDesktop isActive={isActive} />
    </>
  )
}

export default RunesCollection