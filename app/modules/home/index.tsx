import Header from '@/components/layout/Header'
import Banner from './Banner'
import LandingPage from './LandingPage'
import RunesCollection from './RunesCollection'
import RunesMarket from './RunesMarket'
import Tokenmics from './Tokenmics'
import News from './News'
import MemeCoins from './MemeCoins'
import Partners from './Partners'


export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-[#18141a] to-[#000]">
      <Header></Header>
      <LandingPage></LandingPage>
      
      
      <div className='bg-gradient-to-b from-[#18141a] to-[#000]'>
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

        <div className='w-full flex flex-col justify-center items-center'>
          <div className='px-[20px] sm:px-[100px] 2xl:px-0 w-full 2xl:w-[1300px] '>
            <News></News>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center'>
          <div className='w-full '>
            <MemeCoins></MemeCoins>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center bg-[#111111]'>
          <div className='w-full '>
            <Partners></Partners>
          </div>
        </div>
      </div>
    </div>
  )
}
