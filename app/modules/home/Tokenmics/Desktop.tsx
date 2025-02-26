import { Button } from '@/components/ui/button'
import { openUrl } from '@/lib/utils'
import TokenUtility from './TokenUtility'
import TokenDistribution from './TokenDistribution'
import TokenStaking from './TokenStaking'



export default function RunesMarketDesktop() {
  return (
    <>
     <div className='w-full flex gap-[23px] sm:mt-[200px]'>
       
        <div className='w-1/2 flex flex-col gap-[23px]'>
          <TokenUtility/>
          <TokenDistribution/>
          <TokenStaking/>
        </div>
        <div className='w-1/2 relative bg-cover bg-no-repeat rounded-[40px]' style={{ 
          backgroundImage: 'url(/images/market.png)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center' 
        }}>
          <div className="w-full z-10 flex flex-col p-[32px] relative h-full justify-end">
            <div className='text-white 2xl:text-[50px] text-[30px] font-bold text-center'>
              Rune Trading Market
            </div>
            <div className='flex gap-[55px] items-center justify-center mt-[32px]'>
              <Button onClick={()=>{openUrl('')}} variant='common' className='xl:h-[69px] font-normal md:px-5 sm:text-[12px] xl:text-[20px]'>StartTrading</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
