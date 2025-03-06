// app/blog/[slug]/page.jsx
import { marked } from 'marked';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/posts';
import MainLayout from '@/components/MainLayout';

// Add metadata for SEO
export async function generateMetadata({ params }) {
  // Properly await params before using
  const resolvedParams = await Promise.resolve(params);
  const post = getPostBySlug(resolvedParams.slug);
  
  return { 
    title: `${post.title} | Drew Clark's Blog`,
    description: `Read my blog post about ${post.title}`
  };
}

export default async function BlogPostPage({ params }) {
  // Properly await params before using
  const resolvedParams = await Promise.resolve(params);
  const post = getPostBySlug(resolvedParams.slug);

  return (
    <MainLayout>
      <main className="max-w-3xl mx-auto p-4">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-500 hover:underline">&larr; Back to all posts</Link>
        </div>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">Published on {post.date}</p>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(post.content) }} 
        />
      </main>
    </MainLayout>
  );
}
