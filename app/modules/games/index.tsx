import FullscreenScroll from './fullscreen-scroll'
import StreetRivals from './StreetRivals'
// import ScroolContent from './ScroolContent'
import Side from './Side'
import Partners from '../home/Partners'
export default function GamesPage() {

  return (
    <div className="w-full h-full">
      <FullscreenScroll/>
      <StreetRivals></StreetRivals>
      <div className='relative'>
      <Side></Side>
      </div>
      {/* <ScroolContent></ScroolContent> */}
      <Partners />
    </div>
  )
}
