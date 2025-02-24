import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './index.css';
import { bannerData } from './data'
import { EffectCoverflow, Pagination } from 'swiper/modules';
// import { bannerQuery } from '@/api';

export default function Banner() {
  const [bannerList, setBannerList] = useState(bannerData);
  // const getData = async () => {
  //   const {data: list} = await bannerQuery();
  //   setBannerList(list);
  // };
  // useEffect(() => {
  //   getData();
  // });
  return (
    <div className='flex justify-center items-center w-full'>
{/* max-w-full sm:px-[60px] xl:px-[0px] xl:max-w-[1160px] 2xl:max-w-[1300px]  */}
      <div className='w-full relative overflow-hidden '>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          coverflowEffect={{
            rotate: 14,
            // stretch: 20,
            // depth: 80,
            // modifier: 2,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="min-h-[290px] w-full "
        >
          {
            bannerList.map((item:any) => {
              return (
                <SwiperSlide className='w-[615px]' key={item.id}>
                  <Image width={615} height={345} src={item.image}  alt=''/>
                </SwiperSlide>
              );
            })
          }
          
        </Swiper>
      </div>
    </div>

  );
}
