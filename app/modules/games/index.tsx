// 'use client'
import { IMAGE_URLS } from '@/lib/constants/urls'
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full absolute top-0 left-0 opacity-40 z-10">
        <video
          className=" w-screen h-screen"
          autoPlay
          loop
          muted
          poster={IMAGE_URLS.v1.homeVideo}
        >
          <source src={IMAGE_URLS.video.vd} type="video/mp4" className='' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center py-[20px] z-40">
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

            <div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
