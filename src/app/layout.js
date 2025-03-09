import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Drew Clark's Blog",
  description: "A blog about technology, programming, and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="border-t py-6 bg-brandGray-50 dark:bg-brandGray-900">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="text-brandGray-600 dark:text-brandGray-400">
                © {new Date().getFullYear()} Drew Clark's Blog • Built with 
                <span className="text-neonOrange-500 font-medium"> Next.js</span>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
