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
        <GamesModules></GamesModules>
      </div>
    </div>
  )
}
