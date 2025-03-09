import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
          
          <Footer />
        </div>
      </body>
    </html>
  );
}
