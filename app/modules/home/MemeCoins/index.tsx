'use client'
import React from 'react';
import { Button } from '@/components/ui/button'
import { openUrl } from '@/lib/utils'
import Image from 'next/image';

interface MemeCoinsProps {
  isActive: boolean;
}

const MemeCoins: React.FC<MemeCoinsProps> = ({ isActive }) => {
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center text-white'>
        <div className=''>
          <Image src='/images/memecoin.png' className='w-full sm:w-[327px] sm:h-[584px]' alt='meme' width={327} height={584} />
        </div>
        <div className='text-[25px] leading-[30px] sm:text-[50px] sm:leading-[60px]'>
          Meme Coins, Real Rewards
        </div>
        <div className='text-[10px] leading-[12px] sm:text-[20px] sm:leading-[24px] mt-[25px]'>
          <div className='text-center'>Explore how Meme Coins fuel our ecosystem, </div>
          <div className='text-center'>connecting games to vibrant communities and projects.</div>
        </div>

        <div className='mt-[50px] z-10'>
          <Button onClick={()=>{openUrl('')}} variant='common3' className='text-[10px] px-5 block sm:hidden'>Learn More</Button>
          <Button onClick={()=>{openUrl('')}} variant='common' className='hidden sm:block font-normal px-[40px] sm:text-[12px] xl:text-[20px]'>Learn More</Button>
        </div>
      </div>
    </>
  )
}

export default MemeCoins;
