/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        lg: '1024px',
        lapy: '1389px',
        macbook: '1714px',
        imac: '1887px',
        samsung: '2297px',
      },
      colors: { primary: '#0000ff', kala: '#000444', lightPrimary: '#f1f1ff' },
      fontFamily: {
        monaLight: ['Mona-Sans-Light', 'light'],
        monaRegular: ['Mona-Sans-Regular', 'regular'],
        monaMedium: ['Mona-Sans-Medium', 'medium'],
        monaSemibold: ['Mona-Sans-Semibold', 'semibold'],
        monaBold: ['Mona-Sans-Bold', 'Bold'],
        monaExtra: ['Mona-Sans-ExtraBold', 'extrabold'],
        monaBlack: ['Mona-Sans-Black', 'Black'],
        filsonHeavy: ['FilsonPro-Heavy', 'extrabold'],
      },
      boxShadow: {
        'drop-1': '0px 10px 30px 0px rgba(66, 71, 97, 0.1)',
        'drop-2': '0 8px 30px 0 rgba(65, 89, 214, 0.3)',
        'drop-3': '0 8px 30px 0 rgba(65, 89, 214, 0.1)',
        'drop-4': '0 0 12px 0 rgba(204, 204, 204, 1)',
        'drop-5': '0 4px 10px 10px rgba(225, 225, 225, 0.60)',
      },
    },
  },
  plugins: [],
};
