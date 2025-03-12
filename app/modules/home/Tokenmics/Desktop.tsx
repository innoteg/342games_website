import { Button } from '@/components/ui/button'
import { openUrl } from '@/lib/utils'
import TokenUtility from './TokenUtility'
import TokenDistribution from './TokenDistribution'
import TokenStaking from './TokenStaking'
import { IMAGE_URLS } from '@/lib/constants/urls'



export default function RunesMarketDesktop() {
  return (
    <>
      <div className='w-full gap-[23px] hidden sm:flex'>

        <div className='w-1/2 flex flex-col gap-[23px]'>
          <TokenUtility />
          <TokenDistribution />
          <TokenStaking />
        </div>
        <div className='w-1/2 relative bg-no-repeat rounded-[40px]' style={{
          backgroundImage: IMAGE_URLS.v1.Tokenmics,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="w-full z-10 flex flex-col p-[32px] relative h-full justify-end">
            <div className='text-white 2xl:text-[45px] lg:text-[30px] text-[20px] font-bold text-center'>
              The Heart of 342 Games’
            </div>
            <div className='text-white 2xl:text-[45px] lg:text-[30px] text-[20px] font-bold text-center'>
              Ecosystem – Tokenomics
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
