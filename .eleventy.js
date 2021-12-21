const extendDirs = ['./src/css/', './src/js/', './src/fonts/', './src/images/']

module.exports = function (eleventyconfig) {

  extendDirs.forEach(dir => {
    eleventyconfig.addPassthroughCopy(dir)
    eleventyconfig.addWatchTarget(dir)
  })

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
