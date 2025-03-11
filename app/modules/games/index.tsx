'use client'
import { IMAGE_URLS } from '@/lib/constants/urls'
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function LoginPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // 定义每个部分的可见性
  const firstPartVisible = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
  const secondPartVisible = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const thirdPartVisible = useTransform(scrollYProgress, [0.66, 1], [0, 1]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* 背景部分 */}
      <div className="w-full h-full absolute top-0 left-0 opacity-40 z-10">
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

      {/* 第一部分和第二部分的容器 */}
      <div className="flex flex-col h-full overflow-x-hidden">
        {/* 第一部分 */}
        <div className="flex w-full h-full flex-shrink-0 justify-center items-center py-[20px] z-40">
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

        {/* 第二部分 */}
        <div className="flex w-full h-full flex-shrink-0 justify-center items-center py-[20px] z-40">
          <div className='w-full px-[20px] sm:px-[100px] xl:px-0 xl:w-[1250px] flex flex-col justify-center items-center'>
            <div className='flex text-white'>
              <div className='flex flex-col text-[7px] leading-[9px] sm:text-[15px] sm:leading-[18px] mt-[30px] s gap-[14px]'>
                <div className='text-[20px] leading-[24px] sm:text-[40px] sm:leading-[48px] sm:mb-[38px]'>Team Formation2</div>
                <div>• Blockchain Integration: Safe and transparent transactions2.</div>
                <div>• Rune NFTs & In-GameAssets: Own your progress2.</div>
                <div>• $342Token Rewards: Play and earn seamlessly2. </div>
              </div>
              <div>
                <Image className='w-[688px] h-[384px]' src={IMAGE_URLS.games.gamesContent} width={688} height={384} alt="1"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 滚动进度条 */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      />
    </div>
  )
}
