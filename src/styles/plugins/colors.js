/**
 * Custom color palette plugin for tailwind
 * This plugin adds our brand colors to the Tailwind configuration
 */

export default function colorsPlugin({ addBase, theme }) {
  // Add CSS variables if needed for non-Tailwind contexts
  addBase({
    ':root': {
      '--brand-green-500': '#10B981',
      '--neon-orange-500': '#FF6B00',
      '--brand-blue-500': '#0EA5E9',
      '--brand-gray-500': '#71717A',
    },
  });

  // The plugin automatically extends the theme with these colors
  return {
    theme: {
      extend: {
        colors: {
          brandGreen: {
            50: '#ECFDF5',
            100: '#D1FAE5',
            200: '#A7F3D0',
            300: '#6EE7B7',
            350: '#51DDA8', // new shade between 300 and 400
            400: '#34D399',
            500: '#10B981', // Balanced mid-tone green
            600: '#059669',
            700: '#047857',
            800: '#065F46',
            900: '#064E3B',
            950: '#015338', // extra dark green
          },
          neonOrange: {
            50: '#FFF2E8',
            100: '#FFE6D1',
            200: '#FFC199',
            300: '#FF9B66',
            400: '#FF7A33',
            500: '#FF6B00', // Core neon accent
            600: '#E66000',
            700: '#CC5500',
            800: '#993F00',
            900: '#662A00',
          },
          brandBlue: {
            50: '#EBF8FF',
            100: '#D1EEFC',
            200: '#A7D8F0',
            300: '#7ECBF4',
            400: '#38BDF8',
            500: '#0EA5E9', // Vibrant sky-blue
            600: '#0284C7',
            700: '#0369A1',
            800: '#075985',
            900: '#0C4A6E',
          },
          brandGray: {
            50: '#FAFAFA',
            100: '#F4F4F5',
            200: '#E4E4E7',
            300: '#D4D4D8',
            400: '#A1A1AA',
            500: '#71717A', // Mid-level gray
            600: '#52525B',
            700: '#3F3F46',
            800: '#27272A',
            900: '#18181B',
          },
        },
      },
    },
  };
}
