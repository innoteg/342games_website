import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const data = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Type ${i + 1}`,
  value: Math.floor(Math.random() * 500) + 100, // 随机值
  image: '/images/icons/runesicon.png'
}));

export default function RunesRankBarDesktop() {
  const [selected, setSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null); // Reference for scrolling

  const handleFilter = () => {
    console.log('Filter clicked');
  };

  const handlePrev = () => {
    if (selected !== null) {
      const selectedIndex = data.findIndex(item => item.id === selected);
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
      const selectedIndex = data.findIndex(item => item.id === selected);
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

  const handleFilterClick = (item:any) => {
    console.log('Filter clicked', item);
  };


  const handleImageClick = (id: number) => {
    setSelected(id);
  };

  return (
    <div className=' gradient-border' >
      <div className='content-gb'>
        <div className="py-[20px] px-[30px]">
          <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-white">CUMULATIVE AMOUNT</h2>
            <div className='flex items-center'>
              <Select onValueChange={handleFilterClick}>
                <SelectTrigger className="bg-[#18141a] border-none focus-within:outline-none">
                  <SelectValue className='bg-[#18141a]'/>
                </SelectTrigger>
                <SelectContent className='bg-[#18141a]'>
                  <SelectItem value="light" className=''>
                    <Image className='cursor-pointer mr-2' src="/images/icons/filter.png" alt="Filter" width={13} height={15} />
                  </SelectItem>
                  <SelectItem value="dark">
                    <Image className='cursor-pointer mr-2' src="/images/icons/filter.png" alt="Filter" width={13} height={15} />
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-end mb-4 overflow-x-auto cursor-pointer scrollbar-hidden" ref={scrollRef} style={{ maxWidth: 'calc(72px * 7 + 16px * 6)' }}>
            {data.map((item) => (
              <div key={item.id} id={`item-${item.id}`} className="flex flex-col items-center pr-4">
                <div className='h-[130px] w-[40px] xl:h-[130px] xl:w-[72px] flex flex-col justify-end'>
                  <div
                    className={`w-[40px] xl:h-[130px] xl:w-[72px] cursor-pointer rounded-[10px] ${selected === item.id ? 'bg-gradient-to-b from-blue-500 to-purple-500' : 'bg-gray-700'
                      }`}
                    style={{ height: `${Math.min(item.value / 10, 130)}px` }}
                    onClick={() => handleImageClick(item.id)}
                  >
                  </div>
                </div>
                <div className={`cursor-pointer ${selected === item.id ? '' : 'opacity-40'}`}>
                  <div className='h-[40px] text-xs text-center'>
                    {selected === item.id ?
                      <div className="text-white mt-2">{item.value}</div> :
                      <div className="text-white mt-2">{item.name}</div>
                    }
                  </div>
                  <div className='xl:h-[70px] xl:w-[70px] h-[40px] w-[40px]'>
                    <Image onClick={() => handleImageClick(item.id)} src={item.image} alt={item.name} width={70} height={70} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between px-[20px] bottom-[70px] xl:bottom-[85px] absolute z-20'>
        <Image className='cursor-pointer' onClick={handlePrev} src="/images/icons/prev.png" alt="Previous" width={13} height={15} />
        <Image className='cursor-pointer' onClick={handleNext} src="/images/icons/next.png" alt="Next" width={13} height={15} />
      </div>
    </div>
  );
}