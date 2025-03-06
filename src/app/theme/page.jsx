import ThemeExamples from '@/components/ThemeExamples';

export const metadata = {
  title: 'Theme Colors | Drew Clark Blog',
  description: 'Theme color palette examples for Drew Clark blog',
};

export default function ThemePage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Theme Colors</h1>
      <p className="mb-8">
        This page showcases our custom color palette and demonstrates how it can be used 
        throughout the blog. The colors are implemented as a Tailwind CSS plugin, making them 
        available as utility classes.
      </p>
      <ThemeExamples />
    </div>
  );
}
