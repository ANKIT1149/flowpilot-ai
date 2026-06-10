import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value as string;
  try {
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!);

    return NextResponse.next();
  } catch {
    try {
      const refreshResponse = await axios.post(
        `${request.nextUrl.origin}/api/refresh`,
        {}, // request body
        {
          headers: {
            cookie: request.headers.get('cookie') || '',
          },
        }
      );

      if (refreshResponse.status === 400) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/'],
};
