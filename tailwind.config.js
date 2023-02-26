/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,js,jsx}',
    './src/containers/**/*.{html,js,jsx}',
    './src/styles/**/*.{html,js,jsx}',
    './src/**/*.{html,js,jsx}'
],
  theme: {
    extend: {
      colors:{
        'yellow-grad': '#FCA311',
        'orange-grad': '#FF9F1C',
        'bg-blue': '#14213D',
        'light-blue': '#4CC9F0',
        'greyish' : '#14213D',
        'white-grey' : '#D9D9D9',
        'darkest-blue' : '#14213D'
      }
    },
  },
  plugins: [],
}
