/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {

    fontSize: {
      '2xl': 160,
      xl: 80,
      lg: 67,
      md: 19,
      sm: 15,
      xs: 14,
    },

    colors: {
      'primary-blue': '#00B6F1',
      'second-blue': '#1DA1F2',
      'dark-1': '#17202A',
      'dark-2': '#1C2733',
      'gray': '#5B7083',
      'red': '#F4245E',
      'divgray': '#EBEEF0',
      white: '#FFFFFF',
      black: '#0F1419',
    },
    extend: {
      fontFamily: {
        sf: 'sf-compact, sans-serif'
      }
    },
  },
  plugins: [],
}
