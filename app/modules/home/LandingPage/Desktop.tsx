'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { openUrl } from '@/lib/utils';
import { IMAGE_URLS } from '@/lib/constants/urls';

export default function LandingPage() {
  const [imgOffsetX, setimgOffsetX] = useState('140px')
  useEffect(() => {
    setimgOffsetX('140px')
  }, [])
  return (
    <div className="hidden sm:flex h-screen items-center justify-center relative">
      {/* 左侧视频部分 */}
      {/* h-[513px] w-[934px] */}
      <div className="flex-1 flex justify-center items-center rounded-[40px] w-[50%] ">
        <video
          // w-full h-auto
          className="w-full h-auto rounded-[40px] "
          autoPlay
          loop
          muted
          poster={IMAGE_URLS.v1.homeVideo}
        >
          <source src={IMAGE_URLS.video.vd} type="video/mp4" className='' />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 右侧背景和图标 */}
      <div className={`flex items-center shrink-0 w-[50%] relative h-full`}>
        <motion.div
          className={`-ml-[140px] absolute z-10`}
          animate={{
            y: [0, -8, -16, -8, 0, 8, 16, 8, 0], // Adjusted keyframes for smoother motion
          }}
          transition={{
            duration: 5, // Adjusted duration for smoother transition
            ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smoother easing
            repeat: Infinity,
            repeatType: "mirror", // Ensures the animation reverses smoothly
          }}
        >
          <Image
            src={IMAGE_URLS.v1.deerIcon}
            alt="Deer Icon"
            width={278}
            height={600}
            loading='lazy'
          />
        </motion.div>
        <div className={`relative w-full h-full flex items-center`}>
          <div className={`absolute h-full  font-bold select-none opacity-30 w-full`}>
            <div className='absolute top-[50%] transform -translate-y-1/2 text-[93px] leading-[120px] pl-[140px]'>
              <div className='mb-[25px] bg-gradient-to-r from-[#3E3A39] to-[#231815] bg-clip-text text-transparent'>Play</div>
              <div className='mb-[25pxpx] bg-gradient-to-r from-[#3E3A39] to-[#231815] bg-clip-text text-transparent'>Earn</div>
              <div className='mb-[25px] bg-gradient-to-r from-[#3E3A39] to-[#231815] bg-clip-text text-transparent'>Grow</div>
              <div className='bg-gradient-to-r from-[#3E3A39] to-[#231815] bg-clip-text text-transparent'>Engage</div>
            </div>
          </div>

          <div className={`text-white pl-[140px] lg:pl-[140px] xl:pl-[140px] z-50`}>
            <div className='text-[110px]'>
              <div className='text-[60px] xl:text-[90px] font-bold'>Innovative</div>
              <div className='italic text-[20px] xl:text-[40px] leading-[48px]'>Web3 Gaming</div>
              <div className='italic text-[20px] xl:text-[40px] leading-[48px]'>Services for Web2.</div>
            </div>
            <div className='mt-[75px]'>
              <div className='flex justify-start items-center'>
                <Button onClick={() => {openUrl('')}}
                 variant='common' className='  text-[20px] xl:text-[28px] leading-9  xl:px-[28px] py-[13px] xl:py-[25px]'>Play Now</Button>
                <Button onClick={() => {openUrl('')}} 
                variant='common' className='  text-[20px] xl:text-[28px] leading-9 font-normal ml-5  xl:px-[28px] py-[13px] xl:py-[25px]'>Learn More</Button>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}