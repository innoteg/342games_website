'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"

const dataList = [
  {
    title: 'Decentralized Identity',
    content: 'Establish secure, verifiable identities, ensuring individual ownership and control without centralization.',
  },
  {
    title: 'Blind Auctions',
    content: 'Enable users to place confidential bids, maintaining privacy and fairness without compromising sensitive data.',
  },
  {
    title: 'Privacy Preserving AI',
    content: 'Safeguard AI training and data analysis, ensuring privacy without sacrificing performance.',
  },
  {
    title: 'Confidential DeFi',
    content: 'Secure on-chain data to enable innovative, privacy-focused DeFi applications.',
  },
  {
    title: 'Confidential Voting',
    content: 'Build a more secure and private ecosystem for DAOs, with confidential voting and discreet proposals.',
  },
  {
    title: 'Confidential Transaction',
    content: 'Enable private, yet auditable, on-chain transactions with enhanced confidentiality.',
  },
]

export const Side = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('right-content');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='hidden w-full sm:flex justify-center sm:pt-[100px] sm:pb-[100px]'>
        <div className='flex h-full max-w-[1250px] w-full gap-[70px]'>
          
          <motion.div
            id="right-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className='w-full h-full flex-1'
          >
            {dataList.map((item, index) => (
              <div key={index} className='border-l border-white'>
                <div className='w-full h-full flex gap-[48px]'>
                  {/* <Image width={136} height={136} className='w-[136px] h-[136px]' src={item.img} alt={item.title} /> */}
                  <div className='w-[100px] h-[136px]'></div>
                  <div className='flex flex-col gap-[10px] justify-center'>
                    <div className='text-[40px] leading-[47px] text-white'>{item.title}</div>
                    <div className='text-[16px] leading-[19px] text-[#999] break-all'>{item.content}</div>
                  </div>
                </div>
                {index !== 5 && <div className='h-[136px] w-[2px]  ml-[68px]'></div>}
              </div>
            ))}
          </motion.div>
          <div className=' w-[450px] sticky top-[100px] h-screen '>
            <div className='text-[48px] leading-[57px] text-white break-all'>
              Leveraging FHE to Bring Encryption
              Everywhere
            </div>
            <div className='text-[16px] leading-[19px] text-[#999999] mt-5'>
              Unlock countless possibilities across industries, from on-chain applications like confidential voting and decentralized identity, to broader fields including AI, healthcare, finance, etc. Whether it&apos;s trustless gaming, private social networks, or secure data processing, Fhera empowers you to innovate securely.
            </div>
            {/* <Image width={136} height={136} className='w-[136px] h-[136px] mt-5' src={vars.urls.leftStar} alt='star' /> */}
            <div className='w-[136px] h-[136px]'></div>

          </div>
        </div>
      </div>

      {/* h5 */}
      <div className="flex pt-[151px] w-full sm:hidden flex-col px-[10px]">
        <div className='w-full '>
          <div className='flex justify-end mb-4'>
          </div>
          <div className='text-[32px] leading-[38px] text-white break-all'>
            Leveraging FHE to Bring Encryption
            Everywhere
          </div>
          <div className='text-[14px] leading-[16px] text-[#999999] mt-5 break-all'>
            Unlock countless possibilities across industries, from on-chain applications like confidential voting and decentralized identity, to broader fields including AI, healthcare, finance, etc. Whether it&apos;s trustless gaming, private social networks, or secure data processing, Fhera empowers you to innovate securely.
          </div>
          {dataList.map((item, index) => (
            <div key={index} className='mt-10'>
              <div className='w-full h-full flex flex-col'>
                {/* <Image width={136} height={136} className='w-[136px] h-[136px] mb-5' src={item.img} alt={item.title} /> */}
                <div className='flex flex-col gap-[10px] justify-center mb-[10px]'>
                  <div className='text-[32px] leading-[38px] text-white'>{item.title}</div>
                  <div className='text-[14px] leading-[16px] text-[#999] break-all'>{item.content}</div>
                  {
                    index === 5 && (
                      <div className='mt-5 w-[140px] text-white cursor-pointer hover:opacity-80 transform duration-300 px-[20px] py-[10px] border border-[#666] flex items-center justify-center font-medium text-[16px] leading-[19px] rounded-[72px] break-all'>
                        Learn More
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
