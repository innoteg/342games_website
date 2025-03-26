import React, { useState, useRef } from 'react';
import { useUserStore } from '@/lib/stores/user';


export default function RightSection({ isActive }: any) {
  const userInfo = useUserStore((state) => state.userInfo);
  return (
    <div className={`gradient-border ${isActive ? 'g-none' : ''}`} >
      <div className='content-gb text-white'>
        <div className="">
          <div className='flex items-center text-[20px] leading-6 gap-[10px]'>
            <div className='text-[#C305C3]'>ID</div>
            <div className=''>{userInfo.id ? userInfo.id : '*****'}</div>
          </div>
          <div className='flex items-start text-[25px] leading-[30px] sm:text-[50px] sm:leading-[60px] mt-[30px] justify-between'>
            <div className='shrink-0'>Jasper</div>
            <div className=''>69885.3</div>
          </div>
          <div className='flex items-center text-[20px] leading-6 justify-end  mt-[30px]'>
            <div>0</div>
            <div className='text-[#C305C3]'>($342 Tokens)</div>
          </div>
        </div>
      </div>
    </div>
  );
}