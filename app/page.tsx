// 'use client'

import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Banner from './modules/home/Banner'



export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Header></Header>
      <Banner></Banner>
    </div>
  )
}
