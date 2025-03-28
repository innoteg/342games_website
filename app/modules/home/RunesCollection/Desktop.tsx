import { useDevice } from '@/lib/hooks/useDevice'
import RunesRankBar from '../RunesRankBar'
import RunesMilepost from '../RunesMilepost'
import RunesMarket from '../RunesMarket'
import { Button } from '@/components/ui/button'
import { openUrl } from '@/lib/utils'
import { IMAGE_URLS } from '@/lib/constants/urls'

export default function RunesCollectionDesktop({ isActive }: any) {
  return (
    <>
      <div className='w-full gap-[23px] hidden sm:flex'>
        <div className='w-1/2 flex flex-col gap-[23px]'>
          <RunesRankBar isActive={isActive} />
          <RunesMilepost isActive={isActive}></RunesMilepost>
        </div>
        {/* md:mt-[200px] lg:mt-[400px] xl:mt-[500px] */}
        <div className='w-1/2 relative bg-cover bg-no-repeat rounded-[40px]' style={{
          backgroundImage: `url(${IMAGE_URLS.v1.collection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="w-full z-10 flex flex-col p-[32px] relative h-full justify-end">
            <div className='text-white 2xl:text-[50px] text-[30px] font-bold text-center'>
              Your Rune Collection
            </div>
            <div className='flex gap-[55px] items-center justify-center mt-[32px]'>
              <Button onClick={() => { openUrl('') }} variant='common' className='font-normal md:px-5 sm:text-[12px] xl:text-[20px]'>Trade This Rune</Button>
              <Button onClick={() => { openUrl('') }} variant='common' className='font-normal md:px-5 sm:text-[12px] xl:text-[20px]'>Mint Rune NFT</Button>
            </div>
            {/* Content can be placed here */}
          </div>
        </div>
      </div>
    </>
  )
}
