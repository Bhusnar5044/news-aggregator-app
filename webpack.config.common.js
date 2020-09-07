const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src','index.js')
  },
  // entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // filename: 'index.html',
      // inject: true,
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new ManifestPlugin({
      publicPath: '/news-aggregator-app/',
    }),
  ],
  // resolve: {
  //   alias: {
  //     '~': path.resolve(__dirname, '../src')
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  }
}
