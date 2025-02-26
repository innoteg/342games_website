
import Header from '@/components/layout/Header'
import Banner from './Banner'
import LandingPage from './LandingPage'
import RunesCollection from './RunesCollection'
import RunesMarket from './RunesMarket'
import Tokenmics from './Tokenmics'

export default function HomePage() {
  return (
    <div className="">
      <Header></Header>
      <LandingPage></LandingPage>
      <Banner></Banner>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='px-[20px] sm:px-[100px] 2xl:px-0 w-full 2xl:w-[1300px] '>
          <RunesCollection></RunesCollection>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='px-[20px] sm:px-[100px] 2xl:px-0 w-full 2xl:w-[1300px] '>
          <RunesMarket></RunesMarket>
        </div>
      </div>

      <div className='w-full flex flex-col justify-center items-center'>
        <div className='px-[20px] sm:px-[100px] 2xl:px-0 w-full 2xl:w-[1300px] '>
          <Tokenmics></Tokenmics>
        </div>
      </div>
      
    </div>
  )
}
