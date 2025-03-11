'use client'
import { IMAGE_URLS } from '@/lib/constants/urls'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import FullscreenScroll from './fullscreen-scroll'
export default function LoginPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 定义每个部分的可见性和位置
  const firstPartOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // 第一部分从完全可见到完全不可见
  const secondPartOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]); // 第二部分从完全不可见到完全可见
  const secondPartX = useTransform(scrollYProgress, [0.5, 1], ['100%', '0%']); // 从右到左移动

  return (
    <div className="w-full ">
      
      <FullscreenScroll/>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>

      {/* 第一部分和第二部分的容器 */}
      {/* <div className="flex h-full overflow-x-hidden">
        <motion.div
          style={{ opacity: firstPartOpacity }}
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
        </motion.div>   
      </div> */}

      {/* 滚动进度条 */}
      {/* <motion.div
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
      /> */}
    </div>
  )
}
