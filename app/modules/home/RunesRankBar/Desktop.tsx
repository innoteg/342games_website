import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const data = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Type ${i + 1}`,
  value: Math.floor(Math.random() * 500) + 100, // 随机值
  image: '/images/icons/runesicon.png'
}));

export default function CustomComponent() {
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

  const handleFilterClick = () => {
    console.log('Filter clicked');
  };

  const handleArrowBottomClick = () => {
    console.log('Arrow bottom clicked');
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
              <Image className='cursor-pointer' onClick={handlePrev} src="/images/icons/filter.png" alt="Previous" width={13} height={15} />
              <Image className='cursor-pointer' onClick={handlePrev} src="/images/icons/arrow-bottom.png" alt="Previous" width={13} height={15} />
            </div>
          </div>
          <div className="flex items-end mb-4 overflow-x-auto cursor-pointer scrollbar-hidden" ref={scrollRef} style={{ maxWidth: 'calc(72px * 7 + 16px * 6)' }}>
            {data.map((item) => (
              <div key={item.id} id={`item-${item.id}`} className="flex flex-col items-center pr-4">
                <div className='h-[130px] w-[72px] flex flex-col justify-end'>
                  <div
                    className={`w-[72px] cursor-pointer rounded-[10px] ${selected === item.id ? 'bg-gradient-to-b from-blue-500 to-purple-500' : 'bg-gray-700'
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
                  <div className='sm:h-[70px] sm:w-[70px] h-[40px] w-[40px]'>
                    <Image onClick={() => handleImageClick(item.id)} src={item.image} alt={item.name} width={70} height={70} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between px-[20px] bottom-[58px] absolute z-20'>
        <Image className='cursor-pointer' onClick={handlePrev} src="/images/icons/prev.png" alt="Previous" width={13} height={15} />
        <Image className='cursor-pointer' onClick={handleNext} src="/images/icons/next.png" alt="Next" width={13} height={15} />
      </div>
    </div>
  );
}