// 'use client'

import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Banner from './Banner'
import LandingPage from './LandingPage'




export default function HomePage() {
  return (
    <div className="">
      <Header></Header>
      <LandingPage></LandingPage>
      <Banner></Banner>
    </div>
  )
}
