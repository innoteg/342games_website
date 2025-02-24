import Image from 'next/image';
import { Button } from '@/components/ui/button'
import { IMAGE_URLS } from '@/lib/constants/urls'

export default function DesktopHeader() {
  return (
    <>
      {/* 占位div，防止内容被fixed header遮挡 */}
      <div className="hidden md:block h-[90px]" />
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex h-[90px] items-center justify-between px-10 bg-[#110f23]">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold text-white">
            <Image width={128} height={27} src={IMAGE_URLS.HeadIcon} alt='headerIcon'/>
          </div>

        </div>
        <div className="flex items-center space-x-4">
          <Button variant="common">Play Now</Button>
        </div>
      </header>
    </>
  )
} 