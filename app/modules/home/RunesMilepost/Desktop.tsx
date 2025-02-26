
import React, { useState, useRef } from 'react';
import Image from 'next/image';



export default function RunesMilepostDesktop() {

  const handleFilterClick = (item: any) => {
    console.log('Filter clicked', item);
  };


  return (
    <div className=' gradient-border' >
      <div className='content-gb'>
        <div className="py-[20px] px-[30px] ">
          <div className=''>
            <div className='flex gap-[36px]'>
              <div className='shrink-0'>
                <Image src="/images/icons/runesicon.png" alt="Runes" width={200} height={200} />
              </div>
              <div className='flex flex-col justify-between h-full flex-1 max-h-[200px]'>
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
          </div>
        </div>
      </div>
    </div>
  );
}