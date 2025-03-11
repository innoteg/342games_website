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



  return (
    <div className="w-full h-full">
      
      <FullscreenScroll/>

      <div className='text-white h-[300px]'>11231</div>
    </div>
  )
}
