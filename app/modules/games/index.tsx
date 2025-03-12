import FullscreenScroll from './fullscreen-scroll'
import StreetRivals from './StreetRivals'
// import ScroolContent from './ScroolContent'
import Side from './Side'
import Partners from '../home/Partners'
export default function GamesPage() {

  return (
    <div className="w-full h-full bg-black">
      <FullscreenScroll />
      <StreetRivals></StreetRivals>
      <div className={`w-full flex flex-col justify-center items-center py-[20px] bg-[#000000]`} >
        <div className='w-full px-[20px] sm:px-[100px] xl:px-0 2xl:px-0 xl:w-[1250px] flex flex-col justify-center items-center'>
          <Side></Side>

        </div>
      </div>
      {/* <ScroolContent></ScroolContent> */}
      <Partners />
    </div>
  )
}
