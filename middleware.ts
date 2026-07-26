// Add this at the top of your middleware file
export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;

  if (accessToken) {
    try {
      jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!);
      return NextResponse.next();
    } catch {
      
    }
  }

  try {
    const refreshResponse = await fetch(`${request.nextUrl.origin}/api/refresh`, {
      method: 'POST',
      headers: {
        cookie: request.headers.get('cookie') || '',
      },
    });

    if (!refreshResponse.ok) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const setCookieHeader = refreshResponse.headers.get('set-cookie');

    const response = NextResponse.next();

    if (setCookieHeader) {
      response.headers.set('set-cookie', setCookieHeader);
    }

    return response;
  } catch (error) {
    console.error('Middleware refresh error:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', "/"],
};