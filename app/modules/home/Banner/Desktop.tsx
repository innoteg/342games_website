'use client'

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Ensure navigation css is imported

import './index.css';
import { bannerData } from './data'
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Button } from '@/components/ui/button';
// import { bannerQuery } from '@/api';
function NextButton({ onClick }: any) {
  return (
    <button onClick={onClick} className=" bg-white w-[50px] h-[50px] rounded-full">
      <Image
        width={50}
        height={50}
        src='/images/home/next.png'
        alt={`next`}
        priority
        onClick={onClick}
        className="object-cover w-full h-full  rounded-full "
      />
    </button>
  );
}

function PrevButton({ onClick }: any) {
  return (
    <button onClick={onClick} className=" w-[50px] h-[50px] rounded-full">
      <Image
        width={50}
        height={50}
        src='/images/home/prev.png'
        alt={`next`}
        priority
        onClick={onClick}
        className="object-cover w-full h-full rounded-full"
      />
    </button>

  );
}
export default function Banner() {
  const swiperRef:any = useRef(null);
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
    <div className='w-full py-8'>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          Loading...
        </div>
      )}
      <div className='mb-[95px] text-white w-full flex items-center justify-center font-bold text-[50px] leading-[60px]'>Our Games</div>
      <div className='w-full  relative overflow-hidden '>
        
        <div className='w-full px-[100px]'>
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 25,
                    scale: .8,
                    depth: 250
            // rotate: 20,          // 旋转50度
            // stretch: 80,          // 无拉伸
            // depth: 80,          // 深度效果为100
            // modifier: 1,         // 不修改标准效果
            // slideShadows: true   // 开启slide阴影
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev'
          }}
          spaceBetween={50}
          speed={300}
          watchSlidesProgress={true}
          modules={[EffectCoverflow, Navigation]}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 1,
          //   },
          //   768: {
          //     slidesPerView: 2,
          //   },
          //   1024: {
          //     slidesPerView: 3,
          //   },
          //   1400: {
          //     slidesPerView: 3, // 当屏幕宽度大于1400px时，显示4个slides
          //   },
          // }}
          className="w-full  overflow-hidden "
          onInit={() => setIsLoading(false)}
        >
          {
            bannerList.map((item: any, index: number) => {
              return (
                <SwiperSlide className='!w-[520px] !h-[730px] rounded-[20px] overflow-hidden bg-[#242129]' key={item.id}>
                  <div className='w-full h-full flex flex-col'>
                    <Image
                      width={520}
                      height={260}
                      src={item.image}
                      alt={`Banner ${item.id}`}
                      priority
                      className="object-fill w-full h-[260px]"
                      onLoadingComplete={() => setIsLoading(false)}
                    />
                    <div className='flex flex-col justify-between items-stretch  px-[36px] pt-[36px] pb-[49px] h-full'>
                      <h2 className='leading-[48px] text-[40px] text-[#fff] font-bold break-all'>{item.title}</h2>
                      {
                        item.description.map((item: string) => {
                          return (
                            <p className='leading-5 text-[#afaeb1] text-[17px] ' key={item}>{item}</p>
                          )
                        })
                      }
                      <div className='w-full flex'>
                        <Button 
                          variant={`${activeIndex === index ? 'common' : 'common2'}`}
                          className='mt-2 w-full h-[50px]'
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          }

        </Swiper>
        </div>
        <div className='absolute top-[50%] w-full flex justify-between z-50 px-10'>
          <PrevButton onClick={() => swiperRef?.current?.slidePrev()} />
          <NextButton onClick={() => swiperRef?.current?.slideNext()} />
        </div>
      </div>
    </div>

  );
}
