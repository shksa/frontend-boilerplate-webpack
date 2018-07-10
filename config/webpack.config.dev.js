const path = require('path')
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const dir = {
  STATIC: path.resolve(__dirname, '../static'),
  DIST: path.resolve(__dirname, '../dist'),
  ROOT: path.resolve(__dirname, '..'),
};

module.exports = {
  entry: dir.ROOT, // location of index.js

  output: {
    // publicPath: '/' 
    //      - Every file emitted to your output.path directory will be referenced from the output.publicPath location.
    path: dir.DIST,
    filename: 'bundle.js',
  },

  mode: "development",

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: dir.STATIC, // Tells the server where to serve content from. This is only necessary if you want to serve static files. 
    compress: true, // enable gzip compression.
    hot: true // Enable webpack's Hot Module Replacement feature.

    // proxy: {
    //   '/api': 'http://localhost:3000' - A request to /api/users will now proxy the request to http://localhost:3000/api/users.
    // } 

    // pathRewrite: {'^/api' : ''} - If you don't want /api to be passed along, we need to rewrite the path.

    // publicPath: '/' 
    //      - The bundled files will be available in the browser under this path.
    //      - Imagine that the server is running under http://localhost:8080 and output.filename is set to bundle.js. 
    //      - By default the publicPath is "/", so your bundle is available as http://localhost:8080/bundle.js.
    //      - The publicPath can be changed so the bundle is put in a directory.
    //              ex: publicPath: '/assets/'
    //      - The bundle will now be available as http://localhost:8080/assets/bundle.js.
    //      - NOTE: Make sure publicPath always starts and ends with a forward slash.
    //      - NOTE: It is also possible to use a full URL. This is necessary for Hot Module Replacement.
    //              ex: publicPath: 'http://localhost:8080/assets/'.
    //      - NOTE: It is recommended that devServer.publicPath is the same as output.publicPath
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({ openAnalyzer: false })
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
          loader: 'babel-loader', // This loader allows transpiling .js files using the babel tool.
        }
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            //      - This will emit a file in the output directory (with the specified naming convention, 
            //      - if options are specified to do so) and returns the public URI of the file.
            options: {
              name: 'assets/images/[name].[ext]'
            }
          }
        ]
      },

    ]
  }
}

// Notes: 

// 1. Live Reload
//          - Triggers an app wide reload that listens to file changes.
// 2. Hot Module Replacement 
//          - Is the same as Live Reload with the difference that it only replaces the modules that have been modified, 
//            hence the word Replacement. 
//          - The advantage of this is that it doesn't lose your app state e.g. your inputs on your form fields, 
//            your currently selected tab etc.
//          - Hot Reloading is just short for Hot Module Replacement.