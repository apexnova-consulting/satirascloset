/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3f7',
          100: '#e9e4ef',
          200: '#d8cee0',
          300: '#bfacc9',
          400: '#a282ae',
          500: '#8c6493',
          600: '#774b7a',
          700: '#653d65',
          800: '#553553',
          900: '#492e47',
          950: '#2d1a2c',
        },
        secondary: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
          950: '#1a1a1a',
        },
        accent: {
          50: '#fbf5f0',
          100: '#f6e9dd',
          200: '#eed0b9',
          300: '#e4b18c',
          400: '#da8f5e',
          500: '#d37640',
          600: '#c45f36',
          700: '#a3492f',
          800: '#833e2d',
          900: '#6b3527',
          950: '#391a13',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
} 