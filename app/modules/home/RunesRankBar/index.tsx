'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IMAGE_URLS } from '@/lib/constants/urls'


export default function RunesRankBar({ isActive }: any) {

  const [data, setData]: any = useState<any>([]);

  const [selected, setSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null); // Reference for scrolling
  useEffect(() => {
    setData(Array.from({ length: 12 }, (_, i) => ({
      id: i + 1 + new Date().getTime(),
      name: `Type ${i + 1}`,
      value: Math.floor(Math.random() * 500) + 100, // 随机值
      image: IMAGE_URLS.v1.runesicon
    })))
  }, []);
  const handleFilter = () => {
    console.log('Filter clicked');
  };

  const handlePrev = () => {
    if (selected !== null) {
      const selectedIndex = data.findIndex((item: any) => item.id === selected);
      const targetIndex = selectedIndex > 0 ? selectedIndex - 1 : data.length - 1; // Wrap to last if at the first
      const targetElement = document.getElementById(`item-${data[targetIndex].id}`);
      if (targetElement && scrollRef.current) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        setSelected(data[targetIndex].id); // Update selected item
      }
    } else {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' }); // Scroll left
      }
    }
  };

  const handleNext = () => {
    if (selected !== null) {
      const selectedIndex = data.findIndex((item: any) => item.id === selected);
      const targetIndex = selectedIndex < data.length - 1 ? selectedIndex + 1 : 0; // Wrap to first if at the last
      const targetElement = document.getElementById(`item-${data[targetIndex].id}`);
      if (targetElement && scrollRef.current) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        setSelected(data[targetIndex].id); // Update selected item
      }
    } else {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' }); // Scroll right
      }
    }
  };

  const handleFilterClick = (item: any) => {
    console.log('Filter clicked', item);
  };

  const bg1 = isActive ? 'bg-[#FC03EA] ' : 'bg-gradient-to-b from-blue-500 to-purple-500'
  const bg2 = isActive ? 'bg-[#8B1EDD]' : 'bg-gray-700 '
  const handleImageClick = (id: number) => {
    setSelected(id);
  };
  return (
    <div className={`gradient-border ${isActive ? 'g-none' : ''}`} >
      <div className='content-gb !p-[0px] sm:!p-[20px]'>
        <div className="py-[15px] px-[25px] sm:py-[30px] sm:px-[50px]">
          <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-white text-[12px] leading-[15px] sm:text-[24px] sm:leading-[32px] ">CUMULATIVE AMOUNT</h2>
            <div className='flex items-center'>
              <Select onValueChange={handleFilterClick}>
                <SelectTrigger className="bg-[#18141a] border-none focus-within:outline-none">
                  <SelectValue className='bg-[#18141a]' />
                </SelectTrigger>
                <SelectContent className='bg-[#18141a]'>
                  <SelectItem value="light" className=''>
                    <Image loading='lazy' className='cursor-pointer mr-2' src={IMAGE_URLS.v1.filter} alt="Filter" width={13} height={15} />
                  </SelectItem>
                  <SelectItem value="dark">
                    <Image loading='lazy' className='cursor-pointer mr-2' src={IMAGE_URLS.v1.filter} alt="Filter" width={13} height={15} />
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-end mb-4 overflow-x-auto cursor-pointer scrollbar-hidden" ref={scrollRef} style={{ maxWidth: 'calc(72px * 7 + 16px * 6)' }}>
            {data.map((item: any) => (
              <div key={item.id} id={`item-${item.id}`} className="flex flex-col items-center pr-4"
                onClick={() => handleImageClick(item.id)}
              >
                <div className='h-[100px] w-[35px] xl:h-[130px] xl:w-[72px] flex flex-col justify-end'>
                  <div
                    className={`w-[35px] xl:h-[130px] xl:w-[72px] cursor-pointer rounded-[10px]
                       ${selected === item.id ? (isActive ? 'bg-[#FC03EA] ' : 'bg-gradient-to-b from-blue-500 to-purple-500') :
                        (isActive ? 'bg-[#8B1EDD]' : 'bg-gray-700 ')
                      }`}
                    style={{ height: `${Math.min(item.value / 10, 100)}px` }}
                  >
                  </div>
                </div>
                <div className={`cursor-pointer ${selected === item.id ? '' : 'opacity-40'}`}>
                  <div className='h-[40px] text-[8px] leading-[10px] sm:text-xs text-center'>
                    {selected === item.id ?
                      <div className="text-white mt-2">{item.value}</div> :
                      <div className="text-white mt-2">{item.name}</div>
                    }
                  </div>
                  <div className='xl:h-[70px] xl:w-[70px] h-[35px] w-[35px]'>
                    <Image loading='lazy' onClick={() => handleImageClick(item.id)} src={item.image} alt={item.name} width={70} height={70} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between px-[20px] bottom-[70px] xl:bottom-[85px] absolute z-20'>
        <Image className='cursor-pointer' loading='lazy' onClick={handlePrev} src="/images/icons/prev.png" alt="Previous" width={13} height={15} />
        <Image className='cursor-pointer' loading='lazy' onClick={handleNext} src="/images/icons/next.png" alt="Next" width={13} height={15} />
      </div>
    </div>
  );
}