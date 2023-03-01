/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ssm: '376px',
      lsm: '450px',
      llsm: '520px',
      sm: '640px',
      md: '768px',
      xmd: '850px',
      lg: '1024px',
      xlg: '1160px',
      xl: '1280px',
      axl: '1400px',
      xxl: '1536px',
      xxxl: '1920px'
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')
  ],
}
