const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
      fontFamily: {
        sans: 'Arial, Helvetica, sans-serif',
      },
      // screens: {
      //   xl: { max: '1279px' },
      //   lg: { max: '1023px' },
      //   md: { max: '767px' },
      //   sm: { max: '639px' },
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
