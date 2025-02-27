import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const initialMockData = [
  { id: 1, sellerName: 'Jasper', sellerId: 46381, price: 9686, rarity: 4 },
  { id: 2, sellerName: 'Jasper', sellerId: 46381, price: 9686, rarity: 4 },
  { id: 3, sellerName: 'Jasper', sellerId: 46381, price: 9686, rarity: 4 },
  { id: 4, sellerName: 'Jasper', sellerId: 46381, price: 9686, rarity: 4 },
  { id: 5, sellerName: 'Jasper', sellerId: 46381, price: 9686, rarity: 4 },
];

const generateMockData = (startId: number, count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    id: startId + index + (new Date().getTime()),
    sellerName: 'Jasper',
    sellerId: 46381,
    price: 9686,
    rarity: Math.floor(Math.random() * 5) + 1, // Random rarity between 1 and 5
  }));
};

export default function RightSectionRank({isActive}:any) {
  const [items, setItems] = useState(initialMockData);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const loadMoreItems = () => {
    if (loading) return;
    setLoading(true);
    // Simulate fetching more data
    setTimeout(() => {
      const newItems = generateMockData(items.length + 1, 5); // Load 5 more items
      setItems((prev) => [...prev, ...newItems]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        loadMoreItems();
      }
    };

    observer.current = new IntersectionObserver(observerCallback);
    const target = document.querySelector('.scroll-target');
    if (target) observer.current.observe(target);

    return () => {
      if (observer.current && target) {
        observer.current.unobserve(target);
      }
    };
  }, []);

  return (
    <div className={`gradient-border ${isActive ? 'g-none' : ''}`} >
      <div className='content-gb text-white'>
        <div className="sm:py-[20px] sm:px-[30px]">
          <div className='max-h-[300px] sm:max-h-[500px] overflow-y-auto scroll-target scrollbar-hidden'>
            {items.map((item) => (
              <div key={item.id} className="flex items-stretch justify-between mb-4 w-full">
                <Image src="/images/icons/test1.png" alt="Item Icon" className='w-[45px] h-[45px] sm:w-[100px] sm:h-[100px]' width={100} height={100} />
                <div className="flex-1 ml-4 flex flex-col justify-between">
                  <div className='text-[7px] leading-[8px] sm:text-[14px] sm:leading-4 text-[#5B5B5B] flex gap-4'>
                    <div className='w-[50px] sm:w-[100px] shrink-0'> Transaction ID</div>
                    <div className='text-white'> {item.id}</div>
                  </div>
                  <div className='text-[7px] leading-[8px] sm:text-[14px] sm:leading-4 text-[#5B5B5B] flex gap-4'>
                    <div className='w-[50px] sm:w-[100px] shrink-0'> Seller Name</div>
                    <div className='text-white'> {item.sellerName}</div>
                  </div>
                  <div className='text-[7px] leading-[8px] sm:text-[14px] sm:leading-4 text-[#5B5B5B] flex gap-4'>
                    <div className='w-[50px] sm:w-[100px]'> Seller ID</div>
                    <div className='text-white'> {item.sellerId}</div>
                  </div>
                  {/* <div>Price: ${item.price}</div> */}
                  <div className='text-[7px] leading-[8px] sm:text-[14px] sm:leading-4 text-[#5B5B5B] flex gap-4'>
                    <div className='w-[50px] sm:w-[100px] shrink-0'> Rarity: </div>
                    <div className='text-white'> {'★'.repeat(item.rarity)}{'☆'.repeat(5 - item.rarity)}</div>
                  </div>
                </div>
                <div className=" ml-4 flex flex-col justify-between">
                  <div className='text-[7px] leading-[8px] sm:text-[14px] sm:leading-4 text-[#5B5B5B] flex flex-col justify-between h-full'>
                    <div className=''>Fbe 13 2:50:13</div>
                    <div className='flex flex-col'>
                      <div className='text-white text-[17px] leading-[20px] sm:text-[33px] sm:leading-[40px]'>$9686</div>
                      <div className=''>($342Tokens)</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {loading && <div className="text-center mt-4">Loading...</div>}
          </div>
        </div>
      </div>
    </div>
  );
}