
import React, { useState, useRef } from 'react';
import Image from 'next/image';



export default function RunesMilepostDesktop() {

  const data = {
    name: 'Name',
    type: 'Type',
    rarity: 5,
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
      <div className='content-gb'>
        <div className="py-[20px] px-[30px] ">
          <div className=''>
            <div className='flex gap-[36px] items-stretch px-5'>
              <div className='flex-1 max-w-[200px]'>
                <Image src="/images/icons/runesicon.png" alt="Runes" width={200} height={200} />
              </div>
              <div className='flex flex-col flex-1 '>
                <div className='w-full text-[48px] leading-[58px] text-white flex items-center justify-between'>
                  <span className='font-normal'>Name</span>
                  <div className='w-10 h-10 rounded-full' style={
                    {
                      background: 'linear-gradient(0deg, #0940B9 13.54%, #3029D0 33.54%, #5A13E9 57.24%, #7305F8 76.49%, #7D00FE 87.6%)'
                    }
                  }>

                  </div>
                </div>
                <div className='flex-1'>
                  <div className='text-[20px] leading-[24px] flex items-center'>
                    <div className='text-[#B17BFF] w-[120px]'>Type</div>
                    <div className='text-white'>PVP MODE</div>
                  </div>
                  <div className='text-[20px] leading-[24px] flex items-center mt-[22px]'>
                    <div className='text-[#B17BFF] w-[120px]'>RARITY</div>
                    <div className='flex items-center gap-[2px]'>
                      <Image src="/images/icons/light-start.png" alt="Runes" width={20} height={20} />
                      <Image src="/images/icons/light-start.png" alt="Runes" width={20} height={20} />
                    </div>
                  </div>
                  <div className='text-[20px] leading-[24px] flex items-center mt-[22px]'>
                    <div className='text-[#B17BFF] w-[120px]'>Type</div>
                    <div className='text-white'>FEB 13, 2025</div>
                  </div>
                </div>

              </div>
            </div>


            <div className='h-[1px] w-full bg-[#28242C] mt-[40px]'></div>

            <div className='grid grid-cols-4 gap-[20px] mt-5'>
              {
                data2.map((item, index) => (  
                  <div key={index} className='flex items-center'>
                    <div className='text-[#5B5B5B] text-[12px] leading-[16px]'>
                      <div>{item.label}</div>
                      <div>{item.subTitle}</div>
                    </div>
                    <div className='text-[20px] italic text-white'>+{item.value}</div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}