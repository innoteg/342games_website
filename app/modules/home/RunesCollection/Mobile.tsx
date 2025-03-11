'use client'
import RunesRankBar from '../RunesRankBar'
import RunesMilepost from '../RunesMilepost'
import { Button } from '@/components/ui/button'
import { openUrl } from '@/lib/utils'
import { IMAGE_URLS } from '@/lib/constants/urls'

export default function RunesCollectionMobile({ isActive }:any) {
  return (
    <>
     <div className={`w-full flex flex-col gap-[17px] sm:hidden `}>
        <div className='relative bg-cover bg-no-repeat rounded-[20px] w-full h-auto'>
          <img src='/images/collection.png' alt='collection' className='w-full h-full object-cover' />
          <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col p-[32px] h-full justify-end">
            <div className='text-white 2xl:text-[50px] text-[30px] font-bold text-center'>
              Your Rune Collection
            </div>
            <div className='flex gap-[55px] items-center justify-center mt-[32px]'>
              <Button onClick={()=>{openUrl('')}} variant='common' className='font-normal md:px-5 sm:text-[12px] xl:text-[20px]'>Trade This Rune</Button>
              <Button onClick={()=>{openUrl('')}} variant='common' className='font-normal md:px-5 sm:text-[12px] xl:text-[20px]'>Mint Rune NFT</Button>
            </div>
            {/* Content can be placed here */}
          </div>
        </div>
        <RunesRankBar isActive={isActive} />
        <RunesMilepost isActive={isActive}></RunesMilepost>
      </div>
    </>
  )
}
