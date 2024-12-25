/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: { sm: '640px', lg: '1024px' },
      colors: { primary: '#0000ff' },
    },
  },
  plugins: [],
};
