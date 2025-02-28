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

// 节流函数
const throttle = (func: (...args: any[]) => void, limit: number) => {
  let lastFunc: ReturnType<typeof setTimeout> | null = null;
  let lastRan: number | null = null;

  return function (this: any, ...args: any[]) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - (lastRan as number) >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - (lastRan as number)));
    }
  };
};

export default function HomePage() {
  const [isActive, setIsActive] = useState<string>('RunesCollection');
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY + window.innerHeight; // 当前滚动位置
      Object.keys(sectionsRef.current).forEach(key => {
        const section = sectionsRef.current[key];
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY; // 部分顶部相对于文档的顶部
          const sectionBottom = sectionTop + section.offsetHeight; // 部分底部相对于文档的顶部
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setIsActive(key); // 更新活动部分
          }
        }
      });
    }, 100); // 每100毫秒调用一次

    window.addEventListener('scroll', handleScroll); // 添加滚动事件监听器
    return () => {
      window.removeEventListener('scroll', handleScroll); // 清理事件监听器
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#18141a] to-[#000] w-full">
      <Header />
      <div className='flex justify-center items-center'>
        <div className='w-full xl:w-[1250px] sm:px-[100px] xl:px-0'>
          <LandingPage />
        </div>
      </div>
      <div className='bg-gradient-to-b from-[#18141a] to-[#000]'>
        <Banner />
        <div className='w-full flex flex-col justify-center items-center mt-[80px] sm:mt-[100px]'>
          <div className={`w-full flex flex-col justify-center items-center py-[20px] ${isActive === 'RunesCollection' && 'change-bg'}`} ref={(el:any) => sectionsRef.current['RunesCollection'] = el}>
            <div className='w-full px-[20px] sm:px-[100px] xl:px-0 xl:w-[1250px] flex flex-col justify-center items-center'>
              <RunesCollection isActive={isActive === 'RunesCollection'} />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center mt-[80px] sm:mt-[100px]'>
          <div className={`w-full flex flex-col justify-center items-center py-[20px] ${isActive === 'RunesMarket' && 'change-bg'}`} ref={(el:any) => sectionsRef.current['RunesMarket'] = el}>
            <div className='w-full px-[20px] sm:px-[100px] xl:px-0 2xl:px-0 xl:w-[1250px] flex flex-col justify-center items-center'>
              <RunesMarket isActive={isActive === 'RunesMarket'} />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center mt-[80px] sm:mt-[100px]'>
          <div className={`w-full flex flex-col justify-center items-center py-[20px] ${isActive === 'Tokenmics' && 'change-bg'}`} ref={(el:any) => sectionsRef.current['Tokenmics'] = el}>
            <div className='w-full px-[20px] sm:px-[100px] xl:px-0 2xl:px-0 xl:w-[1250px] flex flex-col justify-center items-center'>
              <Tokenmics isActive={isActive === 'Tokenmics'} />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center mt-[80px] sm:mt-[100px]'>
          <div className={`w-full flex flex-col justify-center items-center py-[20px] ${isActive === 'News' && 'change-bg'}`} ref={(el:any) => sectionsRef.current['News'] = el}>
            <div className='w-full px-[20px] sm:px-[100px] xl:px-0 2xl:px-0 xl:w-[1250px] flex flex-col justify-center items-center'>
              <News isActive={isActive === 'News'} />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center mt-[80px] sm:mt-[100px]'>
          <div className={`w-full pt-[20px]`} ref={(el:any) => sectionsRef.current['MemeCoins'] = el}>
            <MemeCoins isActive={isActive === 'MemeCoins'} />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='flex sm:hidden flex-col items-center text-white mt-[125px]'>
          <div className='text-[25px] leading-[30px] sm:text-[20px] sm:leading-[24px]'>
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
        <div className='w-full'>
          <Partners />
        </div>
      </div>
    </div>
  )
}
