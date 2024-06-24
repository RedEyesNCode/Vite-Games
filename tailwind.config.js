/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#EDB855',
        'custom-brown': '#C95F28',
      },
    },
  },
  plugins: [],
}

