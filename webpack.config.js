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
      template: "./src/html/markup_roll.html",
      inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './html/markup_roll.html',
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/wa.html",
      inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './html/wa.html',
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/wa_tip.html",
      inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './html/wa_tip.html',
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
      template: "./src/html/js_gallery_type1.html",
      inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './html/js_gallery_type1.html',
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
      template: "./src/html/js_faq.html",
      inject: 'body',
      minify: {
        collapseWhitespace: false
      },
      filename: './html/js_faq.html',
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
