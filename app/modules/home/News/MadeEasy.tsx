import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { openUrl } from '@/lib/utils';

export default function TokenUtility({ isActive }: { isActive: boolean }) {
return (
    <div className={`gradient-border ${isActive ? 'g-none' : ''}`} >
      <div className='content-gb text-white'>
        <div className="sm:py-[140px] sm:pt-[100px] sm:pl-[20px] flex flex-col justify-around">
          <div className='text-[20px] leading-[24px] sm:text-[50px] sm:leading-[60px]'>
            <div>Web3 Gaming</div>
            <div>Made Easy</div>
          </div>
          <div className='flex flex-col text-[7px] leading-[9px] sm:text-[15px] sm:leading-[18px] mt-[30px] sm:mt-[140px] gap-[14px]'>
            <div className='text-[20px] leading-[24px] sm:text-[40px] sm:leading-[48px] sm:mb-[38px]'>Icon Highlights</div>
            <div>• Blockchain Integration: Safe and transparent transactions.</div>
            <div>• Rune NFTs & In-GameAssets: Own your progress.</div>
            <div>• $342Token Rewards: Play and earn seamlessly. </div>
          </div>
        </div>
      </div>
    </div>
  );
}