'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    setLoading(true);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Invalid credentials');
      }
      
      router.push('/admin');
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error(error.message || 'Login failed');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-brandGray-100 dark:bg-brandGray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-brandGray-900 dark:text-white">
            Admin Login
          </h2>
          <p className="mt-2 text-center text-sm text-brandGray-600 dark:text-brandGray-400">
            Sign in to manage your blog posts
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                {...register('username', { required: 'Username is required' })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-brandGray-300 dark:border-brandGray-700 placeholder-brandGray-500 text-brandGray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-brandGreen-500 focus:border-brandGreen-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                type="password"
                {...register('password', { required: 'Password is required' })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-brandGray-300 dark:border-brandGray-700 placeholder-brandGray-500 text-brandGray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-brandGreen-500 focus:border-brandGreen-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          
          {(errors.username || errors.password) && (
            <div className="text-red-600 text-sm">
              {errors.username?.message || errors.password?.message}
            </div>
          )}
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brandGreen-600 hover:bg-brandGreen-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandGreen-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Sign in'}
            </button>
          </div>
          
          <div className="text-sm text-center text-brandGray-600 dark:text-brandGray-400">
            <p>Default credentials for development:</p>
            <p>Username: admin</p>
            <p>Password: admin123</p>
          </div>
        </form>
      </div>
    </div>
  );
}
