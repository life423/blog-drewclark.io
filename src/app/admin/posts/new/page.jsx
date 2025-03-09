'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import PostEditor from '@/components/PostEditor';
import toast from 'react-hot-toast';

export default function NewPostPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if user is authenticated
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth/check');
        if (!response.ok) {
          toast.error('You must be logged in to create posts');
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Auth check error:', error);
        toast.error('Authentication error');
        router.push('/admin/login');
      }
    }
    
    checkAuth();
  }, [router]);
  
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-brandGray-900 dark:text-white mb-6">
        Create New Post
      </h1>
      
      <PostEditor />
    </AdminLayout>
  );
}
