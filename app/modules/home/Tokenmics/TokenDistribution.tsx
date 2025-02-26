import React, { useState, useRef } from 'react';
import Image from 'next/image';



export default function TokenDistribution() {

  return (
    <div className=' gradient-border' >
      <div className='content-gb text-white'>
        <div className="py-[0] pl-[30px]">
          <div className='w-1/2'>Token Utility</div>
          <div className='w-1/2 flex flex-col gap-[14px]'>
            <div>• Purchase Rune NFTs.</div>
            <div>• Stake $342 for rewards and premium features.</div>
            <div>• Participate in governance decisions.</div>
          </div>
        </div>
      </div>
    </div>
  );
}