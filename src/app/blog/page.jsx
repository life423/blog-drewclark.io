// app/blog/page.jsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export const metadata = {
  title: 'My Blog | All Posts',
  description: 'Read all my blog posts about web development, technology, and more.',
};

export default function BlogIndexPage() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);

  // For each file, parse frontmatter and build a small summary
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''), // "my-post"
      title: data.title,
      date: data.date,
    };
  });

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-gray-800 pb-4">
            <Link 
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold hover:text-blue-400 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">
              Published on {post.date}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
