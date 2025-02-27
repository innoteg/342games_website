'use client'

import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/partners/0.png',  },
  { src: '/images/partners/1.png',  },
  { src: '/images/partners/2.png',  },
  { src: '/images/partners/3.png' },
  { src: '/images/partners/4.png' },
  { src: '/images/partners/5.png' },
  { src: '/images/partners/6.png' },
  { src: '/images/partners/7.png', },
  { src: '/images/partners/8.png',  },
  { src: '/images/partners/9.png' },
  { src: '/images/partners/10.png' },
  { src: '/images/partners/11.png' },
  { src: '/images/partners/12.png' },
];
const images2 = [
  { src: '/images/partners/0.png', width: '58px', height: '58px' },
  { src: '/images/partners/1.png', width: '65px', height: '65px'  },
  { src: '/images/partners/2.png', width: '58px', height: '58px' },
  { src: '/images/partners/3.png', width: '41px', height: '41px' },
  { src: '/images/partners/5.png', width: '75px', height: '75px' },

];
const images3 = [
  { src: '/images/partners/6.png', width: '41px', height: '41px'   },
  { src: '/images/partners/7.png', width: '33px', height: '33px' },
  { src: '/images/partners/8.png', width: '41px', height: '41px' },
  { src: '/images/partners/9.png', width: '25px', height: '25px' },
  { src: '/images/partners/10.png', width: '33px', height: '33px' },
  { src: '/images/partners/12.png', width: '25px', height: '25px' },
  { src: '/images/partners/4.png', width: '16px', height: '16px' },
  { src: '/images/partners/11.png', width: '25px', height: '25px' },


];
const PartnersScroll: React.FC = () => {
  return (
    <>
      <motion.div
        className="hidden sm:flex overflow-hidden whitespace-nowrap "
        animate={{ x: ['100%', '-100%'] }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src.src}
            alt={`Partner ${index}`}
            className="inline-block mx-2"
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        ))}
      </motion.div>
      <motion.div
        className="block sm:hidden whitespace-nowrap"
        animate={{ }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      >
        {images2.map((src, index) => (
          <img
            key={index}
            src={src.src}
            alt={`Partner ${index}`}
            className="inline-block mx-1"
            style={{ objectFit: 'contain', width: src.width || '100%', height: src.height || 'auto' }}
          />
        ))}
        <br />
        {images3.map((src, index) => (
          <img
            key={index}
            src={src.src}
            alt={`Partner ${index}`}
            className="inline-block mx-1"
            style={{ objectFit: 'contain', width: src.width || '100%', height: src.height || 'auto' }}
          />
        ))}
      </motion.div>

    </>
  )
};

export default PartnersScroll; 