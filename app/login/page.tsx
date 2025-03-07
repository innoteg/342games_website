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
        <div className='flex justify-center items-center'>
          <div className='w-full xl:w-[1250px] sm:px-[100px] xl:px-0'>
            <LoginModule />
          </div>
        </div>
      </div>
    </div>
  )
}
