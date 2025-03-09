import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/PostList';

export default function Home() {
  // Get all posts and take the 3 most recent
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-brandGray-900 rounded-lg shadow-sm border border-brandGray-200 dark:border-brandGray-800">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-brandGray-900 dark:text-white mb-6">
              Drew Clark's Blog
            </h1>
            <p className="text-xl text-brandGray-600 dark:text-brandGray-300 mb-10">
              Welcome to my blog where I write about things that interest me.
            </p>
            
            <div className="border-t border-b border-brandGray-200 dark:border-brandGray-800 py-6 my-8">
              <h2 className="text-2xl font-semibold text-brandGray-800 dark:text-white mb-6">
                Recent Posts
              </h2>
              <div className="mb-8">
                <PostList posts={recentPosts} />
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <Link 
                href="/blog"
                className="inline-block px-6 py-3 rounded-md bg-brandGreen-600 hover:bg-brandGreen-700 text-white transition-colors duration-200 font-medium"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
