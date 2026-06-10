import { db } from '@/src/db';
import { users, refreshTokens } from '@/src/db/schema';
import {
  GenerateAccessToken,
  GenerateRefreshToken,
} from '@/utils/TokenGeneration';
import { UserSchema } from '@/validation/UserSchema';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
  try {
    const { name, email, image } = await request.json();

    if (!name || !email || !image) {
      return NextResponse.json(
        {
          message: 'Failed to Login',
          error:
            'Missing required fields. Please provide name, email, and image.',
        },
        { status: 400 }
      );
    }

    const validationResult = UserSchema.safeParse({ name, email, image });

    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: 'Failed to Login',
          error: validationResult.error.message.replace(/"/g, ''),
        },
        { status: 400 }
      );
    }

    let exsistingUser = await db.query.users.findFirst({
      where: (user, { eq }) => eq(user.email, email),
    });

    if (!exsistingUser) {
      const newUser = await db
        .insert(users)
        .values({
          name: name,
          email: email,
          image: image,
        })
        .returning();

      exsistingUser = newUser[0];
    }

    const accessToken = GenerateAccessToken(exsistingUser.id);

    const refreshToken = GenerateRefreshToken(exsistingUser.id);

    const hashRefreshToken = await bcrypt.hash(refreshToken, 10);

    await db.insert(refreshTokens).values({
      userId: exsistingUser.id,
      token: hashRefreshToken,
    });

    const res = NextResponse.json({ success: true, message: "User logged in successfully" }, { status: 200 });

    res.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 60,
      path: '/',
    });

    res.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });

    return res
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      {
        error: 'An error occurred during login. Please try again.',
      },
      { status: 500 }
    );
  }
}
