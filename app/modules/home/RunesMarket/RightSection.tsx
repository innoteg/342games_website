import React, { useState, useRef } from 'react';
import Image from 'next/image';



export default function RightSection({isActive}:any) {

  return (
    <div className={`gradient-border ${isActive ? 'g-none' : ''}`} >
      <div className='content-gb text-white'>
        <div className="py-[0] px-[0] sm:px-[30px]">
          <div className='flex items-center text-[20px] leading-6 gap-[10px]'>
            <div className='text-[#C305C3]'>ID</div>
            <div className=''>03527</div>
          </div>
          <div className='flex items-start text-[25px] leading-[30px] sm:text-[50px] sm:leading-[60px] mt-[30px] justify-between'>
            <div className='shrink-0'>Jasper</div>
            <div className=''>69885.3</div>
          </div>
          <div className='flex items-center text-[20px] leading-6 justify-end  mt-[30px]'>
            <div>+9899</div>
            <div className='text-[#C305C3]'>($342 Tokens)</div>
          </div>
        </div>
      </div>
    </div>
  );
}