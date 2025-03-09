'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import AdminLayout from '@/components/AdminLayout';

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    // Check if user is authenticated
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth/check');
        if (!response.ok) {
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Auth check error:', error);
        router.push('/admin/login');
      }
    }
    
    // Load all posts
    async function loadPosts() {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        
        if (data.success && data.posts) {
          setPosts(data.posts);
        } else {
          console.error('Failed to load posts:', data.message);
          toast.error('Failed to load posts');
        }
      } catch (error) {
        console.error('Load posts error:', error);
        toast.error('Failed to load posts');
      } finally {
        setLoading(false);
      }
    }
    
    checkAuth();
    loadPosts();
  }, [router]);
  
  const handleDelete = async (slug) => {
    if (isDeleting) return;
    
    if (!confirm('Are you sure you want to delete this post?')) {
      return;
    }
    
    try {
      setIsDeleting(true);
      const response = await fetch(`/api/posts/${slug}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete post');
      }
      
      setPosts(posts.filter(post => post.slug !== slug));
      toast.success('Post deleted successfully');
    } catch (error) {
      console.error('Delete post error:', error);
      toast.error(error.message || 'Failed to delete post');
    } finally {
      setIsDeleting(false);
    }
  };
  
  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-8">Loading...</div>
      </AdminLayout>
    );
  }
  
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-brandGray-900 dark:text-white">
          Manage Posts
        </h1>
        <Link 
          href="/admin/posts/new"
          className="px-4 py-2 bg-brandGreen-600 hover:bg-brandGreen-700 text-white rounded-md"
        >
          New Post
        </Link>
      </div>
      
      <div className="bg-white dark:bg-brandGray-800 shadow-md rounded-lg overflow-hidden">
        {posts.length === 0 ? (
          <div className="p-6 text-center text-brandGray-500 dark:text-brandGray-400">
            No posts found. Create your first post!
          </div>
        ) : (
          <table className="min-w-full divide-y divide-brandGray-200 dark:divide-brandGray-700">
            <thead className="bg-brandGray-50 dark:bg-brandGray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-brandGray-500 dark:text-brandGray-300 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-brandGray-500 dark:text-brandGray-300 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-brandGray-500 dark:text-brandGray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-brandGray-800 divide-y divide-brandGray-200 dark:divide-brandGray-700">
              {posts.map(post => (
                <tr key={post.slug}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brandGray-900 dark:text-white">
                    {post.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-brandGray-500 dark:text-brandGray-400">
                    {new Date(post.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-brandGreen-600 hover:text-brandGreen-800 dark:hover:text-brandGreen-400"
                      target="_blank"
                    >
                      View
                    </Link>
                    <Link 
                      href={`/admin/posts/${post.slug}/edit`}
                      className="text-brandBlue-600 hover:text-brandBlue-800 dark:hover:text-brandBlue-400 ml-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post.slug)}
                      disabled={isDeleting}
                      className="text-red-600 hover:text-red-800 ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  );
}
