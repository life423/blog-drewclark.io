import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/PostList';
import MainLayout from '@/components/MainLayout';

export default function Home() {
  // Get all posts and take the 3 most recent
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <MainLayout>
      <main className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Drew Clark's Blog</h1>
        <p className="mb-8">Welcome to my blog where I write about things that interest me.</p>
        
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        <div className="mb-8">
          <PostList posts={recentPosts} />
        </div>
        
        <Link 
          href="/blog"
          className="inline-block px-5 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700"
        >
          View All Posts
        </Link>
      </main>
    </MainLayout>
  );
}
