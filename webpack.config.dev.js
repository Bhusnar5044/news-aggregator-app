const path = require('path')
const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    port:3000
    // contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.css$/i,
        include: [
          path.resolve(__dirname, 'src/styles','index.css')
        ],
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
})