'use client'

import { useState } from 'react'

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="md:hidden">
      <div className="flex h-14 items-center justify-between px-4 border-b">
        <div className="text-lg font-bold">Logo</div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2"
        >
          <span className="sr-only">Menu</span>
          {/* 汉堡菜单图标 */}
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <nav className="absolute top-14 left-0 w-full bg-background border-b shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#" className="hover:text-primary">首页</a>
            <a href="#" className="hover:text-primary">产品</a>
            <a href="#" className="hover:text-primary">关于</a>
            <div className="pt-4 border-t">
              <button className="w-full py-2 text-center hover:text-primary">登录</button>
              <button className="w-full py-2 text-center hover:text-primary">注册</button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
} 