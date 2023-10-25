/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      // 'sm': '640px',
      // 'md': '768px',
      // 'lg': '1024px',
      // 'xl': '1280px',
      // '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      white: colors.white,
      pink: colors.pink,
      rose: colors.rose,
      black: colors.black,
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: colors.silver,
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca'
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      // spacing: {
      //   '128': '32rem',
      //   '144': '36rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    },
  },
  plugins: [
  ],
}

