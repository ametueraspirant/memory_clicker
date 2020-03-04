module.exports = {
  theme: {
    extend: {
      colors: {
        redfourohfour: "#F06061"
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
