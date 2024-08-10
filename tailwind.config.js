/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bege': '#FFEFBB',
        'marrom': '#4A2F1A',
        'off-white': '#FFF3DB',
        'laranja': '#FF914D'
      }
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'sans2': ['Nunito', 'sans-serif'],
    }
  },
  plugins: [],
}