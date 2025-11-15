import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.analytics_password;

    if (!correctPassword) {
      return NextResponse.json(
        { error: 'Analytics not configured' },
        { status: 500 }
      );
    }

    if (password !== correctPassword) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Set auth cookie
    const cookieStore = await cookies();
    cookieStore.set('analytics_auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('analytics_auth');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
  }
}
