module.exports = {
  theme: {
    extend: {
      colors: {
        swampgreen: '#8aaa6a',
        tan: '#c8ab86',
        redbrown: '#9c5c5c',
        bronze: '#b26c47'
      }
    },
  },
  variants: {
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive']
  },
  plugins: [
    require('tailwindcss-blend-mode')()
  ],
}
