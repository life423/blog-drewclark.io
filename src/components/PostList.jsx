import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <ul className="space-y-6">
      {posts.map((post) => (
        <li key={post.slug} className="py-5 first:pt-0 last:border-b-0">
          <article>
            <Link 
              href={`/blog/${post.slug}`}
              className="group"
            >
              <h3 className="text-xl font-semibold text-brandGray-800 dark:text-white group-hover:text-brandGreen-600 dark:group-hover:text-brandGreen-400 transition-colors duration-200">
                {post.title}
              </h3>
              <div className="mt-2 flex items-center">
                <span className="text-sm text-brandGray-600 dark:text-brandGray-400">
                  Published on {post.date}
                </span>
                <span className="ml-auto text-brandGreen-600 dark:text-brandGreen-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Read more →
                </span>
              </div>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
