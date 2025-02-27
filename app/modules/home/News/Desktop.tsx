import { Button } from '@/components/ui/button'
import { openUrl } from '@/lib/utils'
import MadeEasy from './MadeEasy'
export default function RunesMarketDesktop() {
  return (
    <>
      <div className='w-full flex gap-[23px] sm:mt-[200px]'>
        <div className='w-1/2 relative bg-cover bg-no-repeat rounded-[40px]' style={{
          backgroundImage: 'url(/images/Tokenmics.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="w-full z-10 flex flex-col p-[32px] relative h-full justify-end">
            <div className='flex items-center justify-center'>
              <Button onClick={() => { openUrl('') }} variant='common' className='xl:h-[69px] font-normal md:px-5 sm:text-[12px] xl:text-[20px]'>Learn How It Works</Button>
            </div>
          </div>
        </div>

        <div className='w-1/2 flex flex-col gap-[23px] h-full'>
          <MadeEasy></MadeEasy>
        </div>
      </div>
    </>
  )
}
