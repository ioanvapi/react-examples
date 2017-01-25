

module.exports = {
  entry: './index.js',

  output: {
    path: './',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /.\js$/,
        exclude: /node_modules/,
        query :{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
