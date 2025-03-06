// app/blog/page.jsx
import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/PostList';
import MainLayout from '@/components/MainLayout';

export const metadata = {
  title: "Drew Clark's Blog | All Posts",
  description: 'Read all my blog posts about web development, technology, and more.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <MainLayout>
      <main className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Drew Clark's Blog</h1>
        <PostList posts={posts} />
      </main>
    </MainLayout>
  );
}
