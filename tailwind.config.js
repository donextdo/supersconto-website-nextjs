/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ff-headings' : ['Dosis', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        '2': 'repeat(2, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')

  ],
}

