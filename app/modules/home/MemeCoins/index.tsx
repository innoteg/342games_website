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
        <div className='w-[327px] h-[584px]'>
          <Image src='/images/memecoin.png' alt='meme' width={327} height={584} />
        </div>
        <div className='text-[50px] leading-[60px]'>
          Meme Coins, Real Rewards
        </div>
        <div className='text-[20px] leading-[24px] mt-[25px]'>
          <div className='text-center'>Explore how Meme Coins fuel our ecosystem, </div>
          <div className='w-screen bg-[#18141a] h-[2px]'></div>
          <div className='text-center'>connecting games to vibrant communities and projects.</div>
        </div>

        <div className='mt-[50px] z-10'>
          {/* onClick={()=>{openUrl('')}}  */}
          <Button variant='common' className='xl:h-[81px] font-normal px-[40px] sm:text-[12px] xl:text-[20px]'>Learn More</Button>
        </div>
      </div>
    </>
  )
}

export default MemeCoins;
