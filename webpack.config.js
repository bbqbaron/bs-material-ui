const path = require('path')

module.exports = {
  entry: {
    test: './lib/js/src/test/root.js'
  },
  output: {
    path: path.join(__dirname, 'bundledOutputs'),
    filename: '[name].js'
  }
}
