
import { useDevice } from '@/lib/hooks/useDevice'
import RunesRankBar from '../RunesRankBar'
import RunesMilepost from '../RunesMilepost'
import RunesMarket from '../RunesMarket'
export default function RunesCollectionDesktop() {
  return (
    <>
     <div className='w-full flex'>
        <div className='w-1/2 flex flex-col'>
          <RunesRankBar/>
          <RunesMilepost></RunesMilepost>
        </div>
        <div className='w-1/2'>
          <RunesMarket></RunesMarket>
        </div>
      </div>
    </>
  )
}
