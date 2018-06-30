const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const dir = {
  STATIC: path.resolve(__dirname, '../static'),
  DIST: path.resolve(__dirname, '../dist'),
  ROOT: path.resolve(__dirname, '..'),
};

module.exports = {
  entry: dir.ROOT,
  output: {
    path: dir.DIST,
    filename: 'bundle.js',
  },
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(dir.DIST),
    new CopyWebpackPlugin([{ from: dir.STATIC, to: dir.DIST }])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] //style-loader should be before css-loader
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]'
            }
          }
        ]
      },
    ]
  }
}