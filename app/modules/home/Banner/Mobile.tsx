'use client'

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import Image from 'next/image';


import './index.css';
import { bannerData } from './data'
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Button } from '@/components/ui/button';

export default function Banner() {
  const swiperRef: any = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [bannerList, setBannerList] = useState(bannerData);
  const [isLoading, setIsLoading] = useState(true);
  // const getData = async () => {
  //   const {data: list} = await bannerQuery();
  //   setBannerList(list);
  // };
  // useEffect(() => {
  //   getData();
  // });
  return (
    <div className='w-full'>
      
      <div className='mb-[32px] mt-[70px] text-white w-full flex items-center justify-center font-bold text-[50px] leading-[60px]'>Our Games</div>
      <div className='w-full px-[35px] flex flex-col gap-[20px]'>
        {
          bannerList.map((item, index) => {
            return (
              <div className='w-full h-full flex flex-col rounded-[20px] overflow-hidden' key={index}>
                <Image
                  width={615}
                  height={345}
                  src={item.image}
                  alt={`Banner ${item.id}`}
                  priority
                  className="object-fill w-full "
                  onLoadingComplete={() => setIsLoading(false)}
                />
                <div className='flex flex-col justify-between items-stretch  px-[14px] pt-[18px] pb-[25px] h-full bg-[#242129] '>
                  <h2 className='leading-[24px] text-[20px] text-[#fff] font-bold break-all mb-5'>{item.title}</h2>
                  {
                    item.description.map((item: string) => {
                      return (
                        <p className='leading-[10px] mb-[11px] text-[#afaeb1] text-[9px] ' key={item}>{item}</p>
                      )
                    })
                  }
                  <div className='w-full flex z-10 mt-[24px]'>
                    <Button
                      variant={`${activeIndex === index ? 'common2' : 'common3'}`}
                      className='w-full h-[30px] text-[10px] leading-[12px]'
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>

  );
}
