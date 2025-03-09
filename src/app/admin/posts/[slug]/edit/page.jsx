'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import PostEditor from '@/components/PostEditor';
import toast from 'react-hot-toast';

export default function EditPostPage({ params }) {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { slug } = params;
  
  useEffect(() => {
    // Check if user is authenticated
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth/check');
        if (!response.ok) {
          toast.error('You must be logged in to edit posts');
          router.push('/admin/login');
          return false;
        }
        return true;
      } catch (error) {
        console.error('Auth check error:', error);
        toast.error('Authentication error');
        router.push('/admin/login');
        return false;
      }
    }
    
    // Load post data
    async function loadPost() {
      try {
        const response = await fetch(`/api/posts/${slug}`);
        
        if (!response.ok) {
          throw new Error('Post not found');
        }
        
        const data = await response.json();
        
        if (data.success && data.post) {
          setPost(data.post);
        } else {
          throw new Error(data.message || 'Failed to load post');
        }
      } catch (error) {
        console.error('Load post error:', error);
        toast.error(error.message || 'Error loading post');
        router.push('/admin');
      } finally {
        setLoading(false);
      }
    }
    
    async function initialize() {
      const isAuthenticated = await checkAuth();
      if (isAuthenticated) {
        await loadPost();
      }
    }
    
    initialize();
  }, [router, slug]);
  
  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-8">Loading...</div>
      </AdminLayout>
    );
  }
  
  if (!post) {
    return (
      <AdminLayout>
        <div className="text-center py-8 text-red-500">Post not found</div>
      </AdminLayout>
    );
  }
  
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-brandGray-900 dark:text-white mb-6">
        Edit Post: {post.title}
      </h1>
      
      <PostEditor post={post} isEditing={true} />
    </AdminLayout>
  );
}
