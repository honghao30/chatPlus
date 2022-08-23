const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        //use: ["file-loader"],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/js_calc.html",
      inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './html/js_calc.html',
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/js_tab.html",
      inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './html/js_tab.html',
    }),

    new HtmlWebpackPlugin({
      template: "./src/html/js_gallery_type2.html",
      inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './html/js_gallery_type2.html',
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/side-nav.html",
      //inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './html/side-nav.html',
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/js_faq.html",
      inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './html/js_faq.html',
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/js-gate.html",
      inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './html/js-gate.html',
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/gallery01.html",
      inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './html/gallery01.html',
    }),
    new MiniCssExtractPlugin({
      filename: "common.css",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    liveReload: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
  },
};
