import { NextResponse } from 'next/server';
import { authenticate, sessionOptions } from '@/lib/auth';
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    
    // Authenticate
    const isAuthenticated = await authenticate(username, password);
    
    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Set session
    const cookieStore = await cookies();
    const session = await getIronSession(cookieStore, sessionOptions);
    session.user = { username, isLoggedIn: true };
    await session.save();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'An error occurred during login' },
      { status: 500 }
    );
  }
}
