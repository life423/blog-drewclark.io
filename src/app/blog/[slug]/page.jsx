// app/blog/[slug]/page.jsx
import { marked } from 'marked';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/posts';

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
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-brandGray-900 rounded-lg shadow-sm border border-brandGray-200 dark:border-brandGray-800">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="flex items-center text-brandGreen-600 hover:text-brandGreen-700 dark:text-brandGreen-400 dark:hover:text-brandGreen-300 transition-colors font-medium"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to all posts
              </Link>
            </div>
            
            <article>
              <header className="mb-8 border-b border-brandGray-200 dark:border-brandGray-800 pb-4">
                <h1 className="text-4xl font-bold mb-4 text-brandGray-900 dark:text-white">{post.title}</h1>
                <p className="text-md text-brandGray-600 dark:text-brandGray-400">
                  Published on <time dateTime={post.date}>{post.date}</time>
                </p>
              </header>
              
              <div 
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-brandGray-900 dark:prose-headings:text-white prose-a:text-brandBlue-600 dark:prose-a:text-brandBlue-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
                dangerouslySetInnerHTML={{ __html: marked(post.content) }} 
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
