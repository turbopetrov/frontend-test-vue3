module.exports = {
  lintOnSave: false,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: ['./src/scss/*.scss']
    }
  }
}
