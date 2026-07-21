import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { db } from '@/src/db';
import bcrypt from 'bcrypt';
import { GenerateAccessToken } from '@/utils/TokenGeneration';

export async function POST(req: NextRequest) {
  try {
    const refreshToken = req.cookies.get('refreshToken')?.value;
    console.log(req.cookies.getAll());

    if (!refreshToken) {
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to refresh token',
          error: 'No refresh token provided.',
        },
        { status: 400 }
      );
    }

    const verifyToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET!
    ) as { userId: string };

    console.log(verifyToken);

    const fetchToken = await db.query.refreshTokens.findFirst({
      where: (token, { eq }) => eq(token.userId, verifyToken.userId),
    });

    console.log(fetchToken);

    if (!fetchToken) {
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to refresh token',
          error: 'Refresh token not found in database.',
        },
        { status: 400 }
      );
    }

    const compare = bcrypt.compareSync(refreshToken, fetchToken.token);
    console.log(compare)
    if (compare === true) {
      const accessToken = GenerateAccessToken(fetchToken.userId as string);
      const res = NextResponse.json({
        success: true,
        token: accessToken,
      });

      res.cookies.set('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 15 * 60,
        path: '/',
      });

      console.log('Access token generated and set in cookie:', accessToken);
      console.log(req.cookies.getAll());
      return res;
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to generate access token',
        error: 'Refresh token does not match.',
      },
      { status: 400 }
    );
  } catch (error) {
    console.error('Refresh token error:', error);
    return NextResponse.json(
      {
        message: 'Failed to refresh token',
        error: 'An error occurred while refreshing the token.',
      },
      { status: 500 }
    );
  }
}
