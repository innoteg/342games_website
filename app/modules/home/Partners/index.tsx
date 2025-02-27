'use client';

import { useDevice } from '@/lib/hooks/useDevice'
import { Button } from '@/components/ui/button'
import { openUrl } from '@/lib/utils'
import PartnersScroll from './PartnersScroll'
import Image from 'next/image';
import { MEDIA_URLS } from '@/lib/constants/urls';

export default function RunesCollectionDesktop() {
  return (
    <>
      <div className='w-full sm:mt-[130px]'>
        <div className='mt-[60px] mb-[40px] text-white text-[50px] leading-[60px] font-bold text-center'>Partners</div>
        <div className='w-full sm:px-[160px]'>
          <div className='flex justify-center items-center'>
            <PartnersScroll />
          </div>
          <div className='bg-[#303234] w-full h-[1px] my-[50px]'></div>
          <div className='flex gap-[20px] justify-around items-center text-[#7E7E7E text-[20px] leading-[24px] text-[#7e7e7e]'>
            <span>Home </span>
            <span>About Us </span>
            <span>Games </span>
            {/* <span>My Rune Collection </span> */}
            {/* <span>Trading Market </span> */}
            {/* <span>Web3 </span> */}
            {/* <span>Features </span> */}
            {/* <span>Tokenomics </span> */}
            <span>Meme Coin </span>
            <span>Partners </span>
          </div>

          <div className='flex gap-[20px] justify-center items-center mt-[50px]'>
            <Image onClick={() => openUrl(MEDIA_URLS.x)} className='w-[26px] cursor-pointer hover:opacity-80' src={'/images/icons/x.png'} alt='logo' width={30} height={30} />
            <Image onClick={() => openUrl(MEDIA_URLS.Telegram)} className='w-[30px] cursor-pointer hover:opacity-80' src={'/images/icons/telegram.png'} alt='logo' width={30} height={30} />
            <Image onClick={() => openUrl(MEDIA_URLS.discord)} className='w-[30px] cursor-pointer hover:opacity-80' src={'/images/icons/discord.png'} alt='logo' width={30} height={30} />
          </div>
          <div className='w-full flex justify-center items-center sm:text-[17px] leading-[20px] text-[#fff] my-[50px] gap-5'>
            
            <span className='font-light hover:underline hover:opacity-80'>Terms of Service </span>
            <span className='font-light hover:underline hover:opacity-80'>Privacy Policy</span>
            <span className='font-light hover:underline hover:opacity-80'>lockchain Disclaimer</span>

             
          </div>
          <div className='w-full flex justify-center items-center text-[#7E7E7E text-[17px] leading-[20px] text-[#7e7e7e]'>
            © 2025 342 Games.All rights reserved.
          </div>
          <div className='h-[100px] w-full'></div>
        </div>
      </div>
    </>
  )
}
