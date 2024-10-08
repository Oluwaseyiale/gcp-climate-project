/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree'],
      },
      colors: {
        customGray: 'rgba(63, 64, 64, 1)',
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 128, 86, 0.25)', // Custom shadow with your color
      },
    },
  },
  plugins: [],
}