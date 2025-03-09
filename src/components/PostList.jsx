import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <ul className="divide-y divide-brandGray-200 dark:divide-brandGray-800">
      {posts.map((post) => (
        <li key={post.slug} className="py-5 first:pt-0 last:pb-0">
          <article>
            <Link 
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <h3 className="text-xl font-semibold text-brandGray-900 dark:text-white group-hover:text-brandGreen-600 dark:group-hover:text-brandGreen-400 transition-colors duration-200">
                {post.title}
              </h3>
              <div className="mt-2 flex items-center">
                <time 
                  className="text-sm text-brandGray-700 dark:text-brandGray-300" 
                  dateTime={post.date}
                >
                  Published on {post.date}
                </time>
                <span className="ml-auto text-brandGreen-600 dark:text-brandGreen-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium">
                  Read more →
                </span>
              </div>
              <p className="mt-3 text-brandGray-700 dark:text-brandGray-300 line-clamp-2">
                {post.excerpt || 'Click to read this blog post.'}
              </p>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
