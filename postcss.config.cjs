module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('postcss-each'),
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-fontify')({
      fontsDir: './public/fonts/',
      fontPath: '/fonts/'
    })
  ]
}
