"use client"
import Image from 'next/image';
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { IMAGE_URLS } from "@/lib/constants/urls"

export default function FullscreenScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Track the scroll progress of the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Transform the vertical scroll progress into horizontal movement
  // As we scroll down (0 to 1), move content from right (0%) to left (-500%)
  // The exact percentage depends on how many items you have
  const horizontalMovement = useTransform(
    scrollYProgress,
    [0, 1], // Input range (vertical scroll progress)
    ["0%", "-500%"], // Output range (horizontal position) - adjust based on number of items
  )

  // For demonstration, create some content items
  const items = [
    { id: 1, color: "from-red-500 to-red-700", title: "Section 1" },
    { id: 2, color: "from-blue-500 to-blue-700", title: "Section 2" },
    { id: 3, color: "from-green-500 to-green-700", title: "Section 3" },
    { id: 4, color: "from-yellow-500 to-yellow-700", title: "Section 4" },
    { id: 5, color: "from-purple-500 to-purple-700", title: "Section 5" },
    { id: 6, color: "from-pink-500 to-pink-700", title: "Section 6" },
  ]

  // 监听 scrollYProgress 的变化
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const index = Math.floor(latest * items.length); // 计算当前索引
      setCurrentIndex(index); // 更新当前索引
    });
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative">
      {/* 背景部分 */}
      <div className="w-full h-full fixed top-0 left-0 opacity-40 z-10">
        <video
          className="w-screen h-screen"
          autoPlay
          loop
          muted
          poster={IMAGE_URLS.v1.homeVideo}
        >
          <source src={IMAGE_URLS.video.vd} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Fixed background */}
      <div className="fixed inset-0 -z-10 text-white" aria-hidden="true" />

      {/* Progress bar - fixed at the bottom of the screen */}
      <motion.div
        className="fixed bottom-8 left-1/2 z-50 h-[2px] w-[80%] -translate-x-1/2 rounded-full bg-white/20"
        aria-hidden="true"
      >
        <div className='flex w-[100%] absolute -translate-y-1/2 '>
          {items.map((item, index) => (
            <div key={item.id} className=' w-1/5 flex justify-center items-center flex-col'>
              <div className={`absolute bottom-10 border border-white rounded-sm p-1 px-2 ${currentIndex === index ? 'bg-white text-[#3f3e41]' : 'bg-white/20 text-white'}`}>
                {item.title}
              </div>
              <motion.div
                className={`h-[10px] w-[10px] rounded-[16px] ${currentIndex === index ? 'bg-white' : 'bg-white/20'}`}
              />
            </div>
          ))}
        </div>
        <motion.div
          className="h-full rounded-full bg-white"
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        >


        </motion.div>


      </motion.div>

      {/* Vertical spacer to enable scrolling - height depends on number of items */}
      <div className="h-[600vh]">
        {" "}
        {/* Adjust based on number of items */}
        {/* Sticky container that holds horizontally moving content */}
        <div className="sticky top-0 h-screen w-screen overflow-hidden">
          {/* Horizontally moving content */}
          <motion.div className="flex h-screen" style={{ x: horizontalMovement }}>
            {items.map((item) => (
              <motion.div
                key={item.id}
                className={`flex h-screen w-screen flex-shrink-0 items-center justify-center  p-8`}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <div className="max-w-4xl text-center text-white">
                  <div className="flex h-full overflow-x-hidden">
                    <div
                      className="flex w-full h-full flex-shrink-0 justify-center items-center py-[20px] z-40"
                    >
                      <div className='w-full px-[20px] sm:px-[100px] xl:px-0 xl:w-[1250px] flex flex-col justify-center items-center'>
                        <div className='flex text-white'>
                          <div className='flex flex-col text-[7px] leading-[9px] sm:text-[15px] sm:leading-[18px] mt-[30px] s gap-[14px]'>
                            <div className='text-[20px] leading-[24px] sm:text-[40px] sm:leading-[48px] sm:mb-[38px]'>Team Formation</div>
                            <div>• Blockchain Integration: Safe and transparent transactions.</div>
                            <div>• Rune NFTs & In-GameAssets: Own your progress.</div>
                            <div>• $342Token Rewards: Play and earn seamlessly. </div>
                          </div>
                          <div>
                            <Image className='w-[688px] h-[384px]' src={IMAGE_URLS.games.gamesContent} width={688} height={384} alt="1"></Image>
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

