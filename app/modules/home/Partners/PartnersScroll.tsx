'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { IMAGE_URLS } from '@/lib/constants/urls';

const images = [
  { src: IMAGE_URLS.v1['0'],  },
  { src: IMAGE_URLS.v1['1'],  },
  { src: IMAGE_URLS.v1['2'],  },
  { src: IMAGE_URLS.v1['3'] },
  { src: IMAGE_URLS.v1['4'] },
  { src: IMAGE_URLS.v1['5'] },
  { src: IMAGE_URLS.v1['6'] },
  { src: IMAGE_URLS.v1['7'] },
  { src: IMAGE_URLS.v1['8'] },
  { src: IMAGE_URLS.v1['9'] },
  { src: IMAGE_URLS.v1['10'] },
  { src: IMAGE_URLS.v1['11'] },
  { src: IMAGE_URLS.v1['12'] },
];
const images2 = [
  { src: IMAGE_URLS.v1['0'], width: '58px', height: '58px' },
  { src: IMAGE_URLS.v1['1'], width: '65px', height: '65px'  },
  { src: IMAGE_URLS.v1['2'], width: '58px', height: '58px' },
  { src: IMAGE_URLS.v1['3'], width: '41px', height: '41px' },
  { src: IMAGE_URLS.v1['5'], width: '75px', height: '75px' },

];
const images3 = [
  { src: IMAGE_URLS.v1['6'], width: '41px', height: '41px'   },
  { src: IMAGE_URLS.v1['7'], width: '33px', height: '33px' },
  { src: IMAGE_URLS.v1['8'], width: '41px', height: '41px' },
  { src: IMAGE_URLS.v1['9'], width: '25px', height: '25px' },
  { src: IMAGE_URLS.v1['10'], width: '33px', height: '33px' },
  { src: IMAGE_URLS.v1['12'], width: '25px', height: '25px' },
  { src: IMAGE_URLS.v1['4'], width: '16px', height: '16px' },
  { src: IMAGE_URLS.v1['11'], width: '25px', height: '25px' },


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