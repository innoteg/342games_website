import { Button } from '@/components/ui/button'
import { openUrl } from '@/lib/utils'
import TokenUtility from './TokenUtility'
import TokenDistribution from './TokenDistribution'
import TokenStaking from './TokenStaking'



export default function RunesMarketMobile() {
  return (
    <>
      <div className='w-full flex flex-col gap-[15px] mt-[80px] sm:hidden'>

        
        <div className='w-full relative bg-cover bg-no-repeat rounded-[40px]'>
          <img src='/images/News.png' alt='collection' className='w-full h-full object-cover' />
          <div className="absolute bottom-0 w-full z-10 flex flex-col p-[32px] h-full justify-end">
            <div className='text-white 2xl:text-[45px] lg:text-[30px] text-[20px] font-bold text-center'>
              The Heart of 342 Games’
            </div>
            <div className='text-white 2xl:text-[45px] lg:text-[30px] text-[20px] font-bold text-center'>
              Ecosystem – Tokenomics
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-[9px]'>
          <TokenUtility />
          <TokenDistribution />
          <TokenStaking />
        </div>
      </div>
    </>
  )
}
