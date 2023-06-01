/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
      './resources/views/**/*.blade.php',
      './resources/js/**/*.vue',
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['SourceSansPro', ...defaultTheme.fontFamily.sans],
        },
        spacing: {
            '18': '4.5rem',
        },
        fontWeight: {
            hairline: '100',
            thin: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
        },
    },
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
}

