import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/PostList';

export default function Home() {
  // Get all blog posts
  const allPosts = getAllPosts();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero section */}
        <div className="py-8 md:py-12 mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brandGray-900 dark:text-white mb-4">
            Drew Clark's Blog
          </h1>
          <p className="text-xl text-brandGray-800 dark:text-brandGray-200 max-w-2xl mx-auto">
            Welcome to my blog where I write about technology, design, and web development.
          </p>
        </div>
        
        {/* Blog posts section */}
        <div className="bg-white dark:bg-brandGray-900 rounded-lg shadow-sm border border-brandGray-200 dark:border-brandGray-800 overflow-hidden">
          <div className="px-6 py-6 border-b border-brandGray-200 dark:border-brandGray-800">
            <h2 className="text-2xl font-semibold text-brandGray-800 dark:text-white">
              All Posts
            </h2>
          </div>
          
          <div className="divide-y divide-brandGray-200 dark:divide-brandGray-800">
            <div className="px-6 py-6">
              <PostList posts={allPosts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
