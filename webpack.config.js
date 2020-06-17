const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(css)$/,
        use: {
          loader: 'style-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'missions2u': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    historyApiFallback: true,
    port: 8081,
    host: 'localhost',
    open: false
  }
  ,
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}
