import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-brandGray-900 border-t border-brandGray-200 dark:border-brandGray-800 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-brandGreen-500 mr-2"></div>
              <span className="font-bold text-lg text-brandGray-800 dark:text-white">Drew Clark</span>
            </Link>
            <p className="mt-3 text-brandGray-700 dark:text-brandGray-300 text-sm">
              A personal blog about technology, design, and the web.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="md:text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brandGray-500 dark:text-brandGray-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-brandGray-800 dark:text-brandGray-200 hover:text-brandBlue-600 dark:hover:text-brandBlue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-brandGray-800 dark:text-brandGray-200 hover:text-brandBlue-600 dark:hover:text-brandBlue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brandGray-800 dark:text-brandGray-200 hover:text-brandBlue-600 dark:hover:text-brandBlue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:text-right">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brandGray-500 dark:text-brandGray-400 mb-4">
              Connect
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-brandGray-700 dark:text-brandGray-300">
                Email: <a href="mailto:hello@example.com" className="text-brandGreen-600 dark:text-brandGreen-400 hover:underline">hello@example.com</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-brandGray-200 dark:border-brandGray-800 text-center text-sm text-brandGray-600 dark:text-brandGray-400">
          <p>© {currentYear} Drew Clark's Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
