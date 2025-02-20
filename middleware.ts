import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'

import { auth } from '@/lib/auth';

export async function middleware(request:NextRequest) {
  const { pathname } = request.nextUrl;

  // const authResponse = await auth(request);

  // if (authResponse) {
  //   return authResponse;
  // }
  console.log(new URL('/new-path', request.url), request.url)
  if (pathname === '/old-path') {
    return NextResponse.redirect(new URL('/new-path', request.url), 301);
  }

  if (pathname === '/temporary-path') {
    return NextResponse.redirect(new URL('/new-temporary-path', request.url), 302);
  }

  if (pathname === '/non-existent-path') {
    return new NextResponse('Page not found', { status: 404 });
  }

  return NextResponse.next();
}
export const config = {
  matcher: '/about/:path*',
}