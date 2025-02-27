'use client'

import DesktopBanner from './Desktop'
import MobileBanner from './Mobile'

export default function Banner() {
  return (
    <>
      <MobileBanner />
      <DesktopBanner />
    </>
  )
}
