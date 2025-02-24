'use client'

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Ensure navigation css is imported

import './index.css';
import { bannerData } from './data'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@/components/ui/button';
// import { bannerQuery } from '@/api';

export default function Banner() {
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
    <div className='flex justify-center items-center w-full py-8'>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          Loading...
        </div>
      )}
      <div className='w-full  relative overflow-hidden'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          coverflowEffect={{
            rotate: 15,          // 旋转50度
            stretch: 20,          // 无拉伸
            depth: 100,          // 深度效果为100
            modifier: 2,         // 不修改标准效果
            slideShadows: true   // 开启slide阴影
          }}
          navigation={true}
          spaceBetween={50}
          speed={300}
          watchSlidesProgress={true}
          modules={[EffectCoverflow, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3, // 当屏幕宽度大于1400px时，显示4个slides
            },
          }}
          className="w-full  overflow-hidden px-[40px]"
          onInit={() => setIsLoading(false)}
        >
          {
            bannerList.map((item: any) => {
              return (
                <SwiperSlide className='w-full h-[720px] rounded-[20px] overflow-hidden' key={item.id}>
                  <div className='w-full h-full flex flex-col'>
                    <Image
                      width={520}
                      height={260}
                      src={item.image}
                      alt={`Banner ${item.id}`}
                      priority
                      className="object-cover w-full h-[260px]"
                      style={{
                        objectFit: 'cover',
                      }}
                      onLoadingComplete={() => setIsLoading(false)}
                    />
                    <div className=' bg-[#242129] px-[36px] pt-[36px] pb-[49px]'>
                      <h2 className='leading-[48px] text-[40px] text-[#fff] font-bold '>{item.title}</h2>
                      {
                        item.description.map((item:string) => {
                          return (
                            <p className='leading-5 text-[#afaeb1] text-[17px] '>{item}</p>
                          )
                        })
                      }
                      <Button variant="common" className='mt-2'>Learn More</Button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          }

        </Swiper>
      </div>
    </div>

  );
}
