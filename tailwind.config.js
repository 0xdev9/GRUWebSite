/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          300: '#D6A678',
          400: '#A0522D',
        },
      },
    },
  },
  plugins: [],
};
