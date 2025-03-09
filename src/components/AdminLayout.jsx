'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  
  const handleLogout = async () => {
    if (isLoggingOut) return;
    
    try {
      setIsLoggingOut(true);
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      if (response.ok) {
        router.push('/admin/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-brandGray-100 dark:bg-brandGray-900">
      <Toaster position="top-right" />
      
      <nav className="bg-brandGray-800 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/admin" className="text-xl font-bold">
            Blog Admin
          </Link>
          
          <div className="flex space-x-4">
            <Link href="/admin" className="hover:text-brandGreen-400">
              Dashboard
            </Link>
            <Link href="/admin/posts/new" className="hover:text-brandGreen-400">
              New Post
            </Link>
            <button 
              onClick={handleLogout} 
              className="hover:text-brandGreen-400"
              disabled={isLoggingOut}
            >
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>
      </nav>
      
      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
