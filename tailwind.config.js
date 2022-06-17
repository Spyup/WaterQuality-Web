module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}','./node_modules/tw-elements/dist/js/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    }
  },
  variants: {
    extend: {
      padding: ['hover'],
      borderColor: ['active'],
      textColor: ['active'],
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}