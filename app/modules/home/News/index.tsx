'use client'
import React from 'react'
import RunesCollectionDesktop from './Desktop'
import RunesCollectionMobile from './Mobile'
interface NewsProps {
  isActive: boolean;
}

const News: React.FC<NewsProps> = ({ isActive }) => {

  return (
    <>
      <RunesCollectionMobile />
      <RunesCollectionDesktop />
    </>
  )
}

export default News
