'use client'

import React from 'react'
import RunesCollectionDesktop from './Desktop'
import RunesCollectionMobile from './Mobile'
interface TokenmicsProps {
  isActive: boolean;
}

const Tokenmics: React.FC<TokenmicsProps> = ({ isActive }) => {

  return (
    <>
      <RunesCollectionMobile />
      <RunesCollectionDesktop />
    </>
  )
}

export default Tokenmics
