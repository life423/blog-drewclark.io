import Link from 'next/link';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <header className="border-b mb-8">
        <div className="max-w-3xl mx-auto p-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-lg font-bold hover:opacity-80">
              Home
            </Link>
            <Link href="/blog" className="text-lg font-bold hover:opacity-80">
              Blog
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t mt-12 py-6">
        <div className="max-w-3xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Drew Clark's Blog</p>
        </div>
      </footer>
    </div>
  );
}
