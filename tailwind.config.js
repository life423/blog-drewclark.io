
/** @type {import('tailwindcss').Config} */
import colorsPlugin from './src/styles/plugins/colors.js';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    colorsPlugin,
  ],
}
