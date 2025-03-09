// app/blog/layout.jsx - A layout specifically for the blog section
export default function BlogLayout({ children }) {
  return (
    <div className="bg-brandGray-50 dark:bg-brandGray-950 min-h-screen">
      {children}
    </div>
  );
}
