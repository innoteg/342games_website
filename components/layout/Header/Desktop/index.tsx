export default function DesktopHeader() {
  return (
    <header className="hidden md:flex h-16 items-center justify-between px-6 border-b">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold">Logo</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-primary">首页</a>
          <a href="#" className="hover:text-primary">产品</a>
          <a href="#" className="hover:text-primary">关于</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hover:text-primary">登录</button>
        <button className="hover:text-primary">注册</button>
      </div>
    </header>
  )
} 