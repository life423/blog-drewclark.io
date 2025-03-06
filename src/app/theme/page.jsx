import ThemeExamples from '@/components/ThemeExamples';

export const metadata = {
  title: 'Theme Colors | Drew Clark Blog',
  description: 'Color palette and design system for Drew Clark blog',
};

export default function ThemePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-brandGray-900 p-6 md:p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-brandGray-800 dark:text-white mb-4">
            Theme Colors
          </h1>
          <p className="text-brandGray-700 dark:text-brandGray-300 text-lg">
            This page showcases our custom color palette and demonstrates how it can be used 
            throughout the blog. The colors are implemented as a Tailwind CSS plugin, making them 
            available as utility classes.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-brandGreen-100 dark:bg-brandGreen-900/30 p-3 rounded border-l-4 border-brandGreen-500">
              <p className="text-brandGreen-800 dark:text-brandGreen-200 text-sm">Brand Green</p>
            </div>
            <div className="bg-neonOrange-100 dark:bg-neonOrange-900/30 p-3 rounded border-l-4 border-neonOrange-500">
              <p className="text-neonOrange-800 dark:text-neonOrange-200 text-sm">Neon Orange</p>
            </div>
            <div className="bg-brandBlue-100 dark:bg-brandBlue-900/30 p-3 rounded border-l-4 border-brandBlue-500">
              <p className="text-brandBlue-800 dark:text-brandBlue-200 text-sm">Brand Blue</p>
            </div>
            <div className="bg-brandGray-100 dark:bg-brandGray-800 p-3 rounded border-l-4 border-brandGray-500">
              <p className="text-brandGray-800 dark:text-brandGray-200 text-sm">Brand Gray</p>
            </div>
          </div>
        </div>
      </div>
      
      <ThemeExamples />
    </div>
  );
}
