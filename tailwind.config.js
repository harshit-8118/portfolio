/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'xxs': '300px',
      'xsx': '350px',
      'xss': '400px',
      'xms': '450px',
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
      fontFamily:{
        'darum': ['Darumadrop One', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
        'righteous': ['Righteous', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'alegreya': ['Alegreya Sans', 'sans-serif'],
        'cherry': ['Cherry Bomb One', 'cursive'],
        'asmatic': ['Amatic SC', 'cursive'],
        'diphel':['Diphylleia', 'serif'],
        'pathway':['Pathway Extreme', 'sans-serif']
      }
    },
  },
  plugins: [],
}

