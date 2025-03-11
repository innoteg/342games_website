// 'use client'
import Header from '@/components/layout/Header'
import GamesModules from '../../modules/games/index'

export default function LoginPage(props: any) {
  console.log(props)
  // const router = useRouter()
  // const searchParams = useSearchParams()

  return (
    <div className="w-screen h-screen relative">
      <Header />
      <div className='w-screen flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col justify-center items-center py-[20px]' >
          <div className='w-full px-[20px] sm:px-[100px] xl:px-0 2xl:px-0 xl:w-[1250px] flex flex-col justify-center items-center'>
          </div>
        </div>
      </div>
    </div>
  )
}
