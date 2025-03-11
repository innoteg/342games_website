import { Button } from '@/components/ui/button'
import { openUrl } from '@/lib/utils'
import RightSection from './RightSection'
import RightSectionRank from './RightSectionRank'
import { IMAGE_URLS } from '@/lib/constants/urls'


export default function RunesMarketDesktop({ isActive }:any) {
  return (
    <>
     <div className='w-full flex flex-col gap-[17px] sm:hidden'>
        <div className='w-full relative bg-cover bg-no-repeat rounded-[40px]' >
          <img src='/images/collection.png' alt='collection' className='w-full h-full object-cover' />
          <div className="absolute bottom-0 w-full z-10 flex flex-col p-[32px] h-full justify-end">
            <div className='text-white 2xl:text-[50px] text-[30px] font-bold text-center'>
              Rune Trading Market
            </div>
            <div className='flex gap-[55px] items-center justify-center mt-[32px]'>
              <Button onClick={()=>{openUrl('')}} variant='common' className='hidden sm:block font-normal md:px-5 sm:text-[12px] xl:text-[20px]'>StartTrading</Button>
              <Button onClick={()=>{openUrl('')}} variant='common3' className='block sm:hidden text-[10px] leading-[12px] px-4'>StartTrading</Button>

            </div>
            {/* Content can be placed here */}
          </div>
        </div>
        <div className='w-full flex flex-col gap-[23px]'>
          <RightSection isActive={isActive}/>
          <RightSectionRank isActive={isActive}/>
        </div>
      </div>
    </>
  )
}
