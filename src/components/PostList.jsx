import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.slug} className="border-b pb-4">
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
  );
}
