'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { openUrl } from '@/lib/utils';

export default function LandingPageMobile() {
  const [imgOffsetX, setimgOffsetX] = useState('180px')
  useEffect(() => {
    setimgOffsetX('180px')
  }, [])
  return (
    <div className="bg-[#110f23] mt-[45px] px-[50px]">

      <div className={`flex items-center shrink-0 w-full h-full `}>
        <div className={`relative shrink-0 h-full w-[114px]`}>
          <div className={`font-bold select-none opacity-30 w-full`}>
            <div className='text-[23px] leading-[30px]'>
              <div className='bg-gradient-to-r from-[#3E3A39] to-[#231815] bg-clip-text text-transparent'>Play</div>
              <div className='bg-gradient-to-r from-[#3E3A39] to-[#231815] bg-clip-text text-transparent'>Earn</div>
              <div className='bg-gradient-to-r from-[#3E3A39] to-[#231815] bg-clip-text text-transparent'>Grow</div>
              <div className='bg-gradient-to-r from-[#3E3A39] to-[#231815] bg-clip-text text-transparent'>Engage</div>
            </div>
          </div>
          <motion.div
            className={`absolute top-0 z-10 right-[0px]`}
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
              width={60}
              height={120}
            />
          </motion.div>
        </div>
        <div className={`text-white z-50 flex-1`}>
          <div className='text-[12px]'>
            <div className='text-[32px] leading-[36px] font-bold'>Innovative</div>
            <div className='italic leading-[15px]'>Web3 Gaming</div>
            <div className='italic leading-[15px]'>Services for Web2.</div>
          </div>
          <div className='mt-[25px]'>
            <div >
              <Button onClick={() => { openUrl('') }}
                variant='common' className='h-[22px] text-[10px] leading-[12px] px-[9px] py-[5px]'>Play Now</Button>
              <Button onClick={() => { openUrl('') }}
                variant='common' className='h-[22px] text-[10px] leading-[12px] font-normal ml-[10px] px-[9px] py-[5px]'>Learn More</Button>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full h-[300px] mt-[10px]">
        <video
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
    </div>
  );
}