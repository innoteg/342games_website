'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { openUrl } from '@/lib/utils';

export default function LandingPage() {
  const [imgOffsetX, setimgOffsetX] = useState('180px')
  useEffect(() => {
    setimgOffsetX('180px')
  }, [])
  return (
    <div className="hidden sm:flex h-screen items-center justify-center relative px-10">
      {/* 左侧视频部分 */}
      {/* h-[513px] w-[934px] */}
      <div className="flex-1 flex justify-center items-center rounded-[40px] w-[50%] ">
        <video
          // w-full h-auto
          className="w-full h-auto rounded-[40px] "
          autoPlay
          loop
          muted
          poster="/images/homeVideo.png"
        >
          <source src="/videos/bg_video.mp4" type="video/mp4" className='' />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 右侧背景和图标 */}
      <div className={`flex items-center shrink-0 w-[50%] relative h-full`}>
        <motion.div
          className={`-ml-[180px] absolute z-10`}
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
            src="/images/deerIcon.png"
            alt="Deer Icon"
            width={364}
            height={795}
          />
        </motion.div>
        <div className={`relative w-full h-full`}>
          <div className={`absolute top-[60px] h-full  font-bold select-none opacity-30 w-full`}>
            <div className='text-[110px]  leading-[120px] pl-[180px]'>
              <div className='mb-[60px] bg-gradient-to-r from-[#3E3A39] to-[#231815] bg-clip-text text-transparent'>Play</div>
              <div className='mb-[60px] bg-gradient-to-r from-[#3E3A39] to-[#231815] bg-clip-text text-transparent'>Earn</div>
              <div className='mb-[60px] bg-gradient-to-r from-[#3E3A39] to-[#231815] bg-clip-text text-transparent'>Grow</div>
              <div className='bg-gradient-to-r from-[#3E3A39] to-[#231815] bg-clip-text text-transparent'>Engage</div>
            </div>
          </div>

          <div className={`absolute top-[100px] text-white pl-[180px] z-50`}>
            <div className='text-[110px]'>
              <div className='text-[100px] leading-[120px] font-bold'>Innovative</div>
              <div className='italic text-[40px] leading-[48px]'>Web3 Gaming</div>
              <div className='italic text-[40px] leading-[48px]'>Services for Web2.</div>
            </div>
            <div className='mt-[75px]'>
              <div >
                <Button onClick={() => {openUrl('')}}
                 variant='common' className='h-[70px] text-[30px] leading-9 px-[28px] py-[13px]'>Play Now</Button>
                <Button onClick={() => {openUrl('')}} 
                variant='common' className='h-[70px] text-[30px] leading-9 font-normal ml-[63px] px-[28px] py-[13px]'>Learn More</Button>
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