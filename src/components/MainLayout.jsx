import Link from 'next/link';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <header className="border-b mb-8 bg-brandGreen-50">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              <Link href="/" className="text-lg font-bold text-brandGreen-700 hover:text-brandGreen-500 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-lg font-bold text-brandGreen-700 hover:text-brandGreen-500 transition-colors">
                Blog
              </Link>
              <Link href="/theme" className="text-lg font-bold text-brandGreen-700 hover:text-brandGreen-500 transition-colors">
                Theme
              </Link>
            </div>
            <div className="h-8 w-8 rounded-full bg-brandGreen-500"></div>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t mt-12 py-6 bg-brandGray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-brandGray-600">
            © {new Date().getFullYear()} Drew Clark's Blog • Built with 
            <span className="text-neonOrange-500 font-medium"> Next.js</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
