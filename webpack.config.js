const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
        // from https://stackoverflow.com/questions/43619644/i-am-getting-an-invalid-host-header-message-when-connecting-to-webpack-dev-ser
    allowedHosts: [
      '.onrender.com'
    ],
    //    disableHostCheck: true,  // also possible solution to 'invalid-host-header' but I did not try it
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
