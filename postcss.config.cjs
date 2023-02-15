module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-each'),
    require('postcss-discard-comments'),
    require('autoprefixer'),
    require('cssnano')
  ]
}
