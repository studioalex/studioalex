module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('postcss-each'),
    require('postcss-discard-comments'),
    require('autoprefixer'),
    require('cssnano')
  ]
}
