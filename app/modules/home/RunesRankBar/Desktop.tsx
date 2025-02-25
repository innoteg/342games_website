import React, { useState } from 'react';
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

  const handleFilter = () => {
    console.log('Filter clicked');
  };

  const handlePrev = () => {
    console.log('Prev clicked');
  };

  const handleNext = () => {
    console.log('Next clicked');
  };

  return (
    <div className='relative '>
      <div className="px-[50px] py-[34px] bg-[#1a1a1a] rounded-lg relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white">CUMULATIVE AMOUNT</h2>
          <Button onClick={handleFilter} className="text-white">
            Filter
          </Button>
        </div>
        <div className="flex justify-center items-end mb-4 overflow-x-auto">
          {data.map((item) => (
            <div
              key={item.id}
              className={`w-[74px] mx-2 cursor-pointer ${selected === item.id ? 'bg-gradient-to-b from-blue-500 to-purple-500' : 'bg-gray-700'
                }`}
              style={{ height: `${item.value / 10}px` }}
              onClick={() => setSelected(item.id)}
            >
              {selected === item.id && (
                <div className="text-center text-white mt-2">+ {item.value}</div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 overflow-x-auto">
            {data.map((item) => (
              <div key={item.id} className={`${selected === item.id ? '' : 'opacity-40'
                }`}>
                <Image src={item.image} alt={item.name} width={70} height={70} />
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