// app/blog/layout.jsx
import Link from 'next/link';

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800 mb-8">
        <div className="max-w-3xl mx-auto p-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-lg font-bold hover:text-gray-300">
              Home
            </Link>
            <Link href="/blog" className="text-lg font-bold hover:text-gray-300">
              Blog
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-gray-800 mt-12 py-6">
        <div className="max-w-3xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} My Markdown Blog. Built with Next.js</p>
        </div>
      </footer>
    </div>
  );
}
