import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'
import { auth } from '@/lib/auth';

// 不需要验证的路由
const publicRoutes = ['/login', '/error', '/api/auth', '', '404']

// 路由权限配置
const routePermissions = {
  '/admin': ['admin'],
  '/dashboard': ['admin', 'user'],
  '/profile': ['admin', 'user']
} as const

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 检查是否是公开路由
  // if (publicRoutes.some(route => pathname.startsWith(route))) {
  //   return NextResponse.next();
  // }
 

  // try {
  //   // 获取token
  //   const token = request.cookies.get('next-auth.session-token')?.value;
    
  //   if (!token) {
  //     throw new Error('No token found');
  //   }

  //   // 这里可以添加简单的token验证
  //   // 例如检查token是否存在
  //   if (token.length < 10) {
  //     throw new Error('Invalid token');
  //   }

  //   return NextResponse.next();
  // } catch (error) {
  //   // token无效，重定向到登录页
  //   const url = new URL('/login', request.url);
  //   return NextResponse.redirect(url);
  // }
}

export const config = {
  matcher: [
    /*
     * 匹配所有路由除了:
     * - api/auth (NextAuth 路由)
     * - _next (Next.js 系统路由)
     * - public (公共资源)
     * - favicon.ico (浏览器图标)
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};