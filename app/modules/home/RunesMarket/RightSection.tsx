import React, { useState, useRef } from 'react';
import Image from 'next/image';



export default function RightSection() {

  const data = {
    name: 'Name',
    type: 'Type',
    rarity: 3,
    value: 85,  
    attack: 85,
    defense: 85,
    magic: 85,
    resistance: 85,
    DEFENSE: 85,
    hp: 85,
  }
  const data2 = [
    {
      label: 'PHYSICAL',
      subTitle: 'ATTACK',
      value: 85,
    },
    {
      label: 'PHYSICAL',
      subTitle: 'DEFENSE',
      value: 85,
    },
    {
      label: 'MAGIC',
      subTitle: 'DEFENSE',
      value: 85,
    },
    {
      label: 'MAX',
      subTitle: 'HP',
      value: 85,
    }
  ]

  return (
    <div className=' gradient-border' >
      <div className='content-gb text-white'>
        <div className="py-[0] px-[30px]">
          <div className='flex items-center text-[20px] leading-6 gap-[10px]'>
            <div className='text-[#C305C3]'>ID</div>
            <div className=''>03527</div>
          </div>
          <div className='flex items-start text-[50px] leading-[60px] mt-[30px] justify-between'>
            <div className='shrink-0'>Jasper</div>
            <div className=' leading-[60px]'>69885.3</div>
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