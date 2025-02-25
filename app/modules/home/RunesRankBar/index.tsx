import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const data = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Type ${i + 1}`,
  value: Math.floor(Math.random() * 500) + 100, // 随机值
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
    <div className="p-4 bg-[#1a1a1a] rounded-lg relative">
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
            className={`w-10 mx-2 cursor-pointer ${
              selected === item.id ? 'bg-gradient-to-b from-blue-500 to-purple-500' : 'bg-gray-700'
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
        <Button onClick={handlePrev} className="text-white">
          Prev
        </Button>
        <div className="flex space-x-2 overflow-x-auto">
          {data.map((item) => (
            <div key={item.id} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <Image src={`/images/${item.name}.png`} alt={item.name} width={30} height={30} />
            </div>
          ))}
        </div>
        <Button onClick={handleNext} className="text-white">
          Next
        </Button>
      </div>
    </div>
  );
}