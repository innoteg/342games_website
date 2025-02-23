import Image from 'next/image';
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
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-primary">首页</a>
            <a href="#" className="text-white hover:text-primary">产品</a>
            <a href="#" className="text-white hover:text-primary">关于</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-primary">登录</button>
          <button className="text-white hover:text-primary">注册</button>
        </div>
      </header>
    </>
  )
} 