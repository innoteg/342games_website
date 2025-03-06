import React, { useState, useRef } from 'react';
import Image from 'next/image';



export default function TokenUtility({isActive}:any) {

  return (
    <div className={`gradient-border ${isActive ? 'g-none' : ''}`} >
      <div className='content-gb text-white'>
        <div className="flex">
          <div className='w-1/2 text-[20px] leading-[24px] sm:text-[40px] sm:leading-[48px]'>Token Utility</div>
          <div className='w-1/2 flex flex-col gap-[7px] sm:gap-[14px] text-[7px] leading-[9px] sm:text-[15px] sm:leading-[18px]'>
            <div>• Purchase Rune NFTs.</div>
            <div>• Stake $342 for rewards and premium features.</div>
            <div>• Participate in governance decisions.</div>
          </div>
        </div>
      </div>
    </div>
  );
}