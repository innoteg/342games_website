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
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' }); // Scroll left
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' }); // Scroll right
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
    <div className='relative ' style={{
      border: '4px solid',
      borderImageSource: 'linear-gradient(90deg, #0940B9 -0.29%, #FF00FE 100.29%)',
    }}>
      <div className="px-[50px] py-[34px] bg-transparent  rounded-lg relative" >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white">CUMULATIVE AMOUNT</h2>
          <div className='flex items-center'>
            <Image className='cursor-pointer' onClick={handlePrev} src="/images/icons/filter.png" alt="Previous" width={13} height={15} />
            <Image className='cursor-pointer' onClick={handlePrev} src="/images/icons/arrow-bottom.png" alt="Previous" width={13} height={15} />
          </div>
        </div>
        <div className="flex justify-center items-end mb-4 overflow-x-auto cursor-pointer" ref={scrollRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className={`w-[72px] mx-2 cursor-pointer rounded-[10px] ${selected === item.id ? 'bg-gradient-to-b from-blue-500 to-purple-500' : 'bg-gray-700'
                }`}
              style={{ height: `${item.value / 10}px` }}
              onClick={() => handleImageClick(item.id)}
            >
  
              
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 overflow-x-auto ">
            {data.map((item) => (
              
              <div key={item.id} className={`cursor-pointer ${selected === item.id ? '' : 'opacity-40'
                }`}>
                <div className='h-[40px] text-xs'>
                  {selected === item.id ? 
                    <div className="text-center text-white mt-2">{item.value}</div> :
                    <div className="text-center text-white mt-2">{item.name}</div>
                  }
                </div>
                <div className='sm:h-[40px] sm:w-[40px] h-[40px] w-[40px]'>
                <Image onClick={() => handleImageClick(item.id)} src={item.image} alt={item.name} width={70} height={70} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between px-[20px] bottom-[37px] absolute'>
        <Image className='cursor-pointer' onClick={handlePrev} src="/images/icons/prev.png" alt="Previous" width={13} height={15} />
        <Image className='cursor-pointer' onClick={handleNext} src="/images/icons/next.png" alt="Next" width={13} height={15} />
      </div>
    </div>
  );
}