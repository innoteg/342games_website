import { useDevice } from '@/lib/hooks/useDevice'
import { Button } from '@/components/ui/button'
import { openUrl } from '@/lib/utils'
import PartnersScroll from './PartnersScroll'

export default function RunesCollectionDesktop() {
  return (
    <>
      <div className='w-full sm:mt-[200px]'>
        <div className='mt-[130px] mb-[40px] text-white text-[50px] leading-[60px] font-bold text-center'>Partners</div>
        <div className='w-full'>
          <PartnersScroll />

        </div>
      </div>
    </>
  )
}
