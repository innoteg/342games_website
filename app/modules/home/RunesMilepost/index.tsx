import React, { useState, useRef } from 'react';
import Image from 'next/image';



export default function RunesMilepostDesktop({isActive}:any) {

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
    <div className={`gradient-border ${isActive ? 'g-none' : ''}`} >
      <div className='content-gb'>
        <div className="sm:py-[20px] sm:px-[30px] ">
          <div className=''>
            <div className='flex gap-[20px] sm:gap-[36px] items-stretch px-1 sm:px-5'>
              <div className='flex-1 w-[100px] sm:w-[auto] sm:max-w-[200px]'>
                <Image src="/images/icons/runesicon.png" alt="Runes" className='w-[100px] sm:w-[200px]' width={200} height={200} />
              </div>
              <div className='flex flex-col flex-1 '>
                <div className='w-full xl:text-[48px] text-[24px] xl:leading-[58px] leading-[38px] text-white flex items-center justify-between'>
                  <span className='font-normal'>Name</span>
                  <div className='xl:w-10 xl:h-10 w-5 h-5 rounded-full' style={
                    {
                      background: 'linear-gradient(0deg, #0940B9 13.54%, #3029D0 33.54%, #5A13E9 57.24%, #7305F8 76.49%, #7D00FE 87.6%)'
                    }
                  }>

                  </div>
                </div>
                <div className='flex justify-end flex-col flex-1 xl:text-[20px] text-[10px] xl:leading-[24px] leading-[12px] h-full gap-[10px] xl:gap-[0]'>
                  <div className=' flex items-center justify-between'>
                    <div className='text-[#B17BFF] shrink-0'>Type</div>
                    <div className='text-white'>PVP MODE</div>
                  </div>
                  <div className='flex items-center xl:mt-[22px] justify-between'>
                    <div className='text-[#B17BFF] shrink-0'>RARITY</div>
                    <div className='flex items-center gap-[2px]'>
                      {
                        Array.from({ length: data.rarity }, (_, index) => (
                          <Image className='xl:h-[20px] xl:w-[20px] h-[10px] w-[10px]' key={index} src="/images/icons/light-star.png" alt="Runes" width={20} height={20} />
                        ))
                      }
                      {
                        Array.from({ length: 5 - data.rarity }, (_, index) => (
                          <Image className='xl:h-[20px] xl:w-[20px] h-[10px] w-[10px]' key={index + data.rarity} src="/images/icons/dark-star.png" alt="Runes" width={20} height={20} />
                        ))
                      }
                    </div>
                  </div>
                  <div className=' flex items-center xl:mt-[22px] justify-between'>
                    <div className='text-[#B17BFF] shrink-0'>Type</div>
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
                    <div className='text-[#5B5B5B] xl:text-[12px] text-[8px] leading-[16px]'>
                      <div>{item.label}</div>
                      <div>{item.subTitle}</div>
                    </div>
                    <div className='xl:text-[20px] text-[12px] italic text-white'>+{item.value}</div>
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