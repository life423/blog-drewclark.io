import { NextResponse } from 'next/server';
import { sessionOptions } from '@/lib/auth';
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

export async function POST() {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession(cookieStore, sessionOptions);
    session.destroy();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'An error occurred during logout' },
      { status: 500 }
    );
  }
}
