"use client"
import Image from 'next/image';
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { IMAGE_URLS } from "@/lib/constants/urls"
import { listData } from './data';
export default function FullscreenScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  console.log('scrollYProgress', scrollYProgress)
  const [isVisible, setIsVisible] = useState(true);

  // Transform the vertical scroll progress into horizontal movement
  // As we scroll down (0 to 1), move content from right (0%) to left (-500%)
  // The exact percentage depends on how many items you have
  const horizontalMovement = useTransform(
    scrollYProgress,
    [0, 1], // Input range (vertical scroll progress)
    ["0%", "-500%"], // Output range (horizontal position) - adjust based on number of items
  )

  // For demonstration, create some content items
  const items = listData

  // 监听 scrollYProgress 的变化
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const index = Math.floor(latest * items.length); // 计算当前索引
      setCurrentIndex(index); // 更新当前索引

      // 根据 scrollYProgress 的值判断是否隐藏固定元素
      setIsVisible(latest < 1); // 当 scrollYProgress 小于 1 时显示元素
    });
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative">
      {/* 背景部分 */}
      {/* Fixed background */}
      <div className={`${isVisible ? 'fixed' : 'hidden'} inset-0 -z-10 text-white`} aria-hidden="true" />

      {/* Progress bar - fixed at the bottom of the screen */}

      <div className="h-[600vh]">
        <div className="sticky top-0 h-screen w-screen overflow-hidden">
          {/* Horizontally moving content */}
          <motion.div className="flex h-screen" style={{ x: horizontalMovement }}>
            {items.map((item, index) => (
              <motion.div
                key={index}
                className={`flex h-screen w-screen flex-shrink-0 items-center justify-center  p-8`}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <div className="max-w-4xl text-center text-white">
                  <div className="flex h-full overflow-x-hidden w-full">
                    <div
                      className="flex w-full h-full flex-shrink-0 justify-center items-center py-[20px] z-40"
                    >
                      <div className='w-full px-[20px]  xl:w-[1250px]'>
                        <div className='w-full text-white'>
                        <div className='w-full'>
                            <Image loading='lazy' className='w-[400px] h-[300px] items-end' src={'http://ssqmwdnwb.sabkt.gdipper.com/342website/images/Tokenmics.png'} width={400} height={300} alt=""></Image>
                          </div>
                          <div className='w-full flex flex-col text-[7px] leading-[9px] sm:text-[15px] sm:leading-[18px] mt-[30px] gap-[14px] items-start'>
                            <div className='text-[20px] leading-[24px] sm:text-[40px] sm:leading-[48px] sm:mb-[38px]'>Team Formation</div>
                            <div>• Blockchain Integration: Safe and transparent transactions.</div>
                            <div>• Rune NFTs & In-GameAssets: Own your progress.</div>
                            <div>• $342Token Rewards: Play and earn seamlessly. </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  )
}

