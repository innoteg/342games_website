import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { openUrl } from '@/lib/utils';



export default function TokenUtility() {

  return (
    <div className=' gradient-border  ' >
      <div className='content-gb text-white  '>
        <div className="py-[140px] pt-[100px] pl-[20px] flex flex-col">
          <div className='text-[50px] leading-[60px] '>
            <div>Web3 Gaming</div>
            <div>Made Easy</div>
          </div>
          <div className='flex flex-col text-[15px] leading-[18px] mt-[140px] gap-[14px]'>
            <div className='text-[40px] leading-[48px] mb-[38px]'>Icon Highlights</div>
            <div>• Blockchain Integration: Safe and transparent transactions.</div>
            <div>• Rune NFTs & In-GameAssets: Own your progress.</div>
            <div>• $342Token Rewards: Play and earn seamlessly. </div>
          </div>
        </div>
      </div>
    </div>
  );
}