import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { openUrl } from '@/lib/utils';



export default function TokenUtility() {

  return (
    <div className=' gradient-border' >
      <div className='content-gb text-white'>
        <div className="py-[0] pl-[20px] flex">
          <div className='w-1/2 text-[20px] leading-[24px] sm:text-[40px] sm:leading-[48px]'>Token Staking</div>
          <div className='w-1/2 flex flex-col gap-[7px] sm:gap-[14px] text-[7px] leading-[9px] sm:text-[15px] sm:leading-[18px]'>
            <div>• Earn passive rewards and exclusive bonuses.</div>
            <div>
            <Button onClick={()=>{openUrl('')}} variant='common'
              className='xl:h-[61px] font-normal md:!px-[18px] sm:text-[12px] xl:text-[20px]'>
              Explore theTokenomics
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}