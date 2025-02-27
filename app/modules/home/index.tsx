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
          <div className='px-[20px] sm:px-[100px] 2xl:px-0 w-full 2xl:w-[1300px] ' ref={(el:any) => sectionsRef.current['RunesCollection'] = el}>
            <RunesCollection
              isActive={isActive === 'RunesCollection'}
            ></RunesCollection>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='px-[20px] sm:px-[100px] 2xl:px-0 w-full 2xl:w-[1300px] ' ref={(el:any) => sectionsRef.current['RunesMarket'] = el}>
            <RunesMarket
              isActive={isActive === 'RunesMarket'}
            ></RunesMarket>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center'>
          <div className='px-[20px] sm:px-[100px] 2xl:px-0 w-full 2xl:w-[1300px] ' ref={(el:any) => sectionsRef.current['Tokenmics'] = el}>
            <Tokenmics
              isActive={isActive === 'Tokenmics'}
            ></Tokenmics>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center'>
          <div className='px-[20px] sm:px-[100px] 2xl:px-0 w-full 2xl:w-[1300px] ' ref={(el:any) => sectionsRef.current['News'] = el}>
            <News
              isActive={isActive === 'News'}
            ></News>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center'>
          <div className='w-full ' ref={(el:any) => sectionsRef.current['MemeCoins'] = el}>
            <MemeCoins
              isActive={isActive === 'MemeCoins'}
            ></MemeCoins>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
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
