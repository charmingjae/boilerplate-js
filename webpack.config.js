const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@css": path.resolve(__dirname, "src/CSS"),
      "@page": path.resolve(__dirname, "src/Page"),
      "@router": path.resolve(__dirname, "src/Router"),
      "@comp": path.resolve(__dirname, "src/Component"),
      "@template": path.resolve(__dirname, "src/Template"),
      "@button": path.resolve(__dirname, "src/Component/Button"),
    },
  },
  devtool: "eval-cheap-source-map",
  devServer: {
    host: "localhost",
    port: port,
    open: true,
    hot: true,
    overlay: true,
    writeToDisk: true,
    inline: true,
    historyApiFallback: true,
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                namedExport: true,
              },
            },
          },
        ],
      },
      {
        test: /\.jfif$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
