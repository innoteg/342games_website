'use client'
import React from 'react'
import NewsDesktop from './Desktop'
import NewsMobile from './Mobile'
interface NewsProps {
  isActive: boolean;
}

const News: React.FC<NewsProps> = ({ isActive }) => {

  return (
    <>
      <NewsMobile />
      <NewsDesktop />
    </>
  )
}

export default News
