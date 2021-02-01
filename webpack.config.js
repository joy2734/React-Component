var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/public/',
    filename: 'index.js'
  },
  devServer: {
    hot: true,
    inline: false,
    port: 3000,
    contentBase: __dirname + '/public/',
  },
  module: {
        rules: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'  // use ! to chain loaders
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
        }
      ]
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
}