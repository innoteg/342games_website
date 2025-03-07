// 'use client'
import Header from '@/components/layout/Header'
import LoginModule from '../modules/login/index'

export default function LoginPage() {
  return (
    <div className="w-screen h-screen relative">
      <Header />
      <div className="w-screen h-full" style={{
        background: 'linear-gradient(0deg, #0940B6 0%, #FF00FB 100%)'
      }}>
        <div className='flex justify-center items-center h-full z-10'>
          <div className='w-full sm:w-[394px] h-full flex items-center justify-center'>
            <LoginModule />
          </div>
        </div>
      </div>
    </div>
  )
}
