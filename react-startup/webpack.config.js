var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },

  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './src/js'
  ],
  output: {
    path: './',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /(\.css|\.scss)$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
