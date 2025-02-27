'use client'

import DesktopLandingPage from './Desktop'
import MobileLandingPage from './Mobile'

export default function LandingPage() {

  return (
    <>
      <MobileLandingPage />
      <DesktopLandingPage />
    </>
  )
}
