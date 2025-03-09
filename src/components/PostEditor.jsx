'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import MDEditor from '@uiw/react-md-editor';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function PostEditor({ post, isEditing = false }) {
  const router = useRouter();
  const [content, setContent] = useState(post?.content || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      date: post?.date || new Date().toISOString().split('T')[0],
    }
  });
  
  const onSubmit = async (data) => {
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      
      // Prepare the data
      const postData = {
        ...data,
        content,
      };
      
      // API endpoint and method based on whether we're editing or creating
      const endpoint = isEditing 
        ? `/api/posts/${post.slug}`
        : '/api/posts';
      const method = isEditing ? 'PUT' : 'POST';
      
      // Send the request
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
      
      toast.success(isEditing ? 'Post updated!' : 'Post created!');
      router.push('/admin');
    } catch (error) {
      toast.error(error.message || 'An error occurred');
      console.error('Post submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-brandGray-700 dark:text-brandGray-300">
          Title
        </label>
        <input
          {...register('title', { required: 'Title is required' })}
          className="mt-1 block w-full px-3 py-2 border border-brandGray-300 dark:border-brandGray-700 rounded-md shadow-sm focus:outline-none focus:ring-brandGreen-500 focus:border-brandGreen-500"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-brandGray-700 dark:text-brandGray-300">
          Slug (URL-friendly name)
        </label>
        <input
          {...register('slug', { 
            required: 'Slug is required',
            pattern: {
              value: /^[a-z0-9-]+$/,
              message: 'Slug can only contain lowercase letters, numbers, and hyphens'
            }
          })}
          className="mt-1 block w-full px-3 py-2 border border-brandGray-300 dark:border-brandGray-700 rounded-md shadow-sm focus:outline-none focus:ring-brandGreen-500 focus:border-brandGreen-500"
          readOnly={isEditing} // Can't edit slug if editing a post
        />
        {errors.slug && (
          <p className="mt-1 text-sm text-red-600">{errors.slug.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-brandGray-700 dark:text-brandGray-300">
          Publication Date
        </label>
        <input
          type="date"
          {...register('date', { required: 'Date is required' })}
          className="mt-1 block w-full px-3 py-2 border border-brandGray-300 dark:border-brandGray-700 rounded-md shadow-sm focus:outline-none focus:ring-brandGreen-500 focus:border-brandGreen-500"
        />
        {errors.date && (
          <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-brandGray-700 dark:text-brandGray-300 mb-2">
          Content
        </label>
        <MDEditor
          value={content}
          onChange={setContent}
          preview="edit"
          height={400}
          className="dark:bg-brandGray-800"
        />
      </div>
      
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => router.back()}
          className="mr-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-brandGray-700 bg-brandGray-200 hover:bg-brandGray-300 dark:text-white dark:bg-brandGray-700 dark:hover:bg-brandGray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brandGreen-600 hover:bg-brandGreen-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Saving...' : (isEditing ? 'Update Post' : 'Create Post')}
        </button>
      </div>
    </form>
  );
}
