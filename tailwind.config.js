/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'xxs': '300px',
      'xss': '400px',
      'xsm': '500px',
      ...defaultTheme.screens
    },
    extend: {
      spacing: {
        120: '30rem',
        130: '33rem',
        140: '36rem',
        150: '40rem',
        160: '45rem',
        170: '50rem',
        180: '55rem',
        190: '60rem',
        200: '70rem',
        300: '100rem',
        400: '150rem',
        500: '200rem',
      }, 
    },
  },
  plugins: [],
}

