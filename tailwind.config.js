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
        gray: {
          300: '#D3D3D3',
          400: '#A9A9A9',
          500: '#808080',
          600: '#696969',
          700: '#2F4F4F',
        },
        red : {
          300: '#FF6347',
        },
      },
    },
  },
  plugins: [],
};
