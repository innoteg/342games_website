import FullscreenScroll from './fullscreen-scroll'
import StreetRivals from './StreetRivals'
import ScroolContent from './ScroolContent'

export default function GamesPage() {

  return (
    <div className="w-full h-full">
      <FullscreenScroll/>
      <StreetRivals></StreetRivals>
      <ScroolContent></ScroolContent>
    </div>
  )
}
