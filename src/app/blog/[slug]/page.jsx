// app/blog/[slug]/page.jsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// This function tells Next.js which routes to build at build-time
export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);

  // Return an array of { slug: 'fileNameWithoutExtension' }
  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    return { slug };
  });
}

// Add metadata for SEO
export async function generateMetadata({ params }) {
  // Use the params object directly
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  
  return { 
    title: `${data.title} | My Blog`,
    description: `Read my blog post about ${data.title}`
  };
}

export default async function BlogPostPage({ params }) {
  // The slug comes from the URL, e.g. /blog/my-post => slug = "my-post"
  const slug = params.slug;

  // Read the corresponding Markdown file from /posts
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const { data, content } = matter(fileContents);

  return (
    <main className="max-w-3xl mx-auto p-4">
      <div className="mb-8">
        <a href="/blog" className="text-blue-500 hover:underline">&larr; Back to all posts</a>
      </div>
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Published on {data.date}</p>
      <div 
        className="prose prose-invert dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: marked(content) }} 
      />
    </main>
  );
}
