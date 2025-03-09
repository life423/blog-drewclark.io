import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';

export async function GET() {
  try {
    // isAuthenticated() function has been updated to handle cookies() correctly
    const authenticated = await isAuthenticated();
    
    if (!authenticated) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }
    
    return NextResponse.json({ authenticated: true });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { authenticated: false, message: error.message || 'An error occurred during authentication check' },
      { status: 500 }
    );
  }
}
