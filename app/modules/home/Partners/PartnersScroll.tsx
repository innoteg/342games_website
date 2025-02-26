'use client'

import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/partners/0.png',
  '/images/partners/1.png',
  '/images/partners/2.png',
  '/images/partners/3.png',
  '/images/partners/4.png',
  '/images/partners/5.png',
  '/images/partners/6.png',
  '/images/partners/7.png',
  '/images/partners/8.png',
  '/images/partners/9.png',
  '/images/partners/10.png',
  '/images/partners/11.png',
  '/images/partners/12.png',
  
];

const PartnersScroll: React.FC = () => {
  return (
    <motion.div
      className="flex overflow-hidden whitespace-nowrap "
      animate={{ x: ['100%', '-100%'] }}
      transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
    >
      {images.map((src, index) => (
        <img 
          key={index} 
          src={src} 
          alt={`Partner ${index}`} 
          className="inline-block mx-2" 
          style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
        />
      ))}
    </motion.div>
  );
};

export default PartnersScroll; 