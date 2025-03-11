'use client'
import { Button } from '@/components/ui/button';
import { IMAGE_URLS } from '@/lib/constants/urls'
import { openUrl } from '@/lib/utils';
import Image from 'next/image';
const listData = [
  {
    label: 'Services',
    subLabel: 'Development, Operation'
  },
  {
    label: 'Platforms',
    subLabel: '​Telegram, LINE'
  },
  {
    label: '​Client',
    subLabel: '​Non-disclosure'
  },
  {
    label: 'Languages',
    subLabel: '​English, Chinese, More to beAdded'
  },
  {
    label: 'Release Date',
    subLabel: '​TBD'
  }
]
export default function StreetRivals() {

  return (


    <div className='w-screen flex flex-col justify-center items-center oy-5 sm:py-10 my-10 text-white' style={{
      background: 'linear-gradient(0deg, #0940B6 0%, #FF00FB 100%)'
    }}>
      <div className="w-full flex flex-col justify-center items-center py-[20px] ">
        <div className='w-full px-[20px] sm:px-[100px] xl:px-0 xl:w-[1250px] grid grid-cols-1 sm:grid-cols-2  sm:gap-5 xl:gap-[100px]'>

          <div className='w-full h-full flex flex-col items-stretch'>
            <Image className='w-full' src={'http://ssqmwdnwb.sabkt.gdipper.com/342website/images/test/Rectangle%20%281%29.png'} width={461} height={461} alt=''></Image>
          </div>
          <div className='w-full flex flex-col justify-between flex-1'>

            <div className='text-[35px]'>
              <div>Street Rivals</div>
              <div className='my-[10px]'>
                <Button onClick={() => openUrl('')}
                  variant='common' className='z-10  text-[20px] xl:text-[28px] leading-9  xl:px-[28px] py-[13px] xl:py-[25px]'>Play Now</Button>
              </div>
            </div>

            <div className='my-[25px]'>
              Street Rivals is a blockchain-based collectible card game (CCG) that breaks away from traditional
              sports simulation gameplay. It offers an engaging,competition-driven experience suitable for all audiences. Enhanced by Web3 features, the game incorporates play-to-earn mechanics.
            </div>
            <div>
              {
                listData.map((item, index) => {
                  return (
                    <div key={index} className='text-[13px] flex items-center'>
                      <div className='w-2 h-2 rounded-full bg-white mr-1'></div>
                      <span className='font-bold mr-[70px] w-[90px]'>{item.label}</span>
                      <span className=''>{item.subLabel}</span>
                    </div>
                  )
                })
              }
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

