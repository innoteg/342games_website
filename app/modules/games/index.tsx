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
    <div className="w-full ">
      
      <FullscreenScroll/>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>

    </div>
  )
}
