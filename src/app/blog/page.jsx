// app/blog/page.jsx
import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/PostList';

export const metadata = {
  title: "Drew Clark's Blog | All Posts",
  description: 'Read all my blog posts about web development, technology, and more.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-brandGray-900 rounded-lg shadow-sm border border-brandGray-200 dark:border-brandGray-800">
          <div className="max-w-3xl mx-auto">
            <header className="mb-10">
              <h1 className="text-4xl font-bold tracking-tight text-brandGray-900 dark:text-white mb-4">
                All Blog Posts
              </h1>
              <p className="text-lg text-brandGray-600 dark:text-brandGray-300">
                Browse my latest thoughts, tutorials, and insights
              </p>
            </header>
            
            <div className="divide-y divide-brandGray-200 dark:divide-brandGray-800">
              <PostList posts={posts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
