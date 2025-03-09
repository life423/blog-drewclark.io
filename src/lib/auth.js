import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

// Session configuration
export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD || 'complex_password_at_least_32_characters_long',
  cookieName: 'blog-admin-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
  },
};

// Get admin credentials
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
export const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

// Default password for dev environment
const DEFAULT_PASSWORD = 'admin123';
let defaultPasswordHash = null;

// Check if we need to generate a default password hash for development
export async function getDefaultPasswordHash() {
  if (!defaultPasswordHash) {
    defaultPasswordHash = await bcrypt.hash(DEFAULT_PASSWORD, 10);
  }
  return defaultPasswordHash;
}

// Authenticate the user
export async function authenticate(username, password) {
  if (username !== ADMIN_USERNAME) {
    return false;
  }
  
  // Use environment hash if available, otherwise use default password in dev
  const passwordHash = ADMIN_PASSWORD_HASH || await getDefaultPasswordHash();
  
  return await bcrypt.compare(password, passwordHash);
}

// Get the session
export async function getSession() {
  const cookieStore = await cookies();
  const session = await getIronSession(cookieStore, sessionOptions);
  return session;
}

// Check if user is authenticated
export async function isAuthenticated() {
  const session = await getSession();
  return !!session.user;
}

// Handle authentication for API routes
export async function authMiddleware(req) {
  const session = await getSession();
  
  if (!session.user) {
    return {
      status: 401,
      body: { error: 'Unauthorized' }
    };
  }
  
  return null; // No error, proceed
}
