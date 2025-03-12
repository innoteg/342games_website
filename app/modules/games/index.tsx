import FullscreenScroll from './fullscreen-scroll'
import StreetRivals from './StreetRivals'
// import ScroolContent from './ScroolContent'
import { Side } from './Side'
export default function GamesPage() {

  return (
    <div className="w-full h-full">
      <FullscreenScroll/>
      <StreetRivals></StreetRivals>
      <Side></Side>
      {/* <ScroolContent></ScroolContent> */}
    </div>
  )
}
