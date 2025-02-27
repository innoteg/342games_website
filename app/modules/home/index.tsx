'use client'
import Header from '@/components/layout/Header'
import Banner from './Banner'
import LandingPage from './LandingPage'
import RunesCollection from './RunesCollection'
import RunesMarket from './RunesMarket'
import Tokenmics from './Tokenmics'
import News from './News'
import MemeCoins from './MemeCoins'
import Partners from './Partners'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react'

export default function HomePage() {
  const [isActive, setIsActive] = useState<string>('RunesCollection');
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsActive(entry.target.id); // Set active section based on the id of the intersecting element
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    // Observe each section
    Object.keys(sectionsRef.current).forEach(key => {
      if (sectionsRef.current[key]) {
        observer.observe(sectionsRef.current[key]!);
      }
    });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#18141a] to-[#000] w-full">
      <Header></Header>
      <LandingPage></LandingPage>

      <div className='bg-gradient-to-b from-[#18141a] to-[#000]'>
        <Banner></Banner>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='px-[20px] sm:px-[100px] 2xl:px-0 w-full 2xl:w-[1300px] ' ref={(el: any) => sectionsRef.current['RunesCollection'] = el}>
            <RunesCollection
              isActive={isActive === 'RunesCollection'}
            ></RunesCollection>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='px-[20px] sm:px-[100px] 2xl:px-0 w-full 2xl:w-[1300px] ' ref={(el: any) => sectionsRef.current['RunesMarket'] = el}>
            <RunesMarket
              isActive={isActive === 'RunesMarket'}
            ></RunesMarket>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center'>
          <div className='px-[20px] sm:px-[100px] 2xl:px-0 w-full 2xl:w-[1300px] ' ref={(el: any) => sectionsRef.current['Tokenmics'] = el}>
            <Tokenmics
              isActive={isActive === 'Tokenmics'}
            ></Tokenmics>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center'>
          <div className='px-[20px] sm:px-[100px] 2xl:px-0 w-full 2xl:w-[1300px] ' ref={(el: any) => sectionsRef.current['News'] = el}>
            <News
              isActive={isActive === 'News'}
            ></News>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center'>
          <div className='w-full ' ref={(el: any) => sectionsRef.current['MemeCoins'] = el}>
            <MemeCoins
              isActive={isActive === 'MemeCoins'}
            ></MemeCoins>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='flex sm:hidden flex-col items-center text-white mt-[125px]'>
          <div className='text-[25px] leading-[30px] sm:text-[20px] sm:leading-[24px] '>
            Who WeAre
          </div>
          <div className='text-[10px] leading-[12px] sm:text-[20px] sm:leading-[24px] mt-[18px] px-[60px] text-center'>
            342 Games is redefining casual gaming through the power of Web3 technology. Our mission is to seamlessly  blend blockchain innovation with accessible, engaging
            gameplay for players worldwide.
          </div>
          <div className='mt-[25px]'>
            <div className='text-[10px] leading-[12px] sm:text-[20px] sm:leading-[24px] border border-white rounded-[5px] px-5 py-2'>
            Discover Our Story
            </div>
          </div>
        </div>
        <img src='/images/earth.png' alt='partners' />
      </div>
      <div className='w-full flex flex-col justify-center items-center bg-[#111111]'>
        <div className='w-full '>
          <Partners></Partners>
        </div>
      </div>
    </div>
  )
}
