/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'head': '#003594',
      },
      boxShadow: {
        custom: '0 5px 16px rgba(0, 15, 135, 0.4), 0 2px 4px rgba(0, 15, 135, 0.3)'
      },
    },
  },
  plugins: [],
}

