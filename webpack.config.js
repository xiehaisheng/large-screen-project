const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

const resolvePath = relativePath => path.resolve(__dirname, relativePath);

const isDev = process.env.NODE_ENV === 'development'

const publicPath = '/dist/'


module.exports = {
  mode: isDev ? "development" : "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: isDev ? "/" : publicPath,
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader",
        options: {
          "presets": [
            "@babel/preset-react",
            "@babel/preset-typescript",
            [
              "@babel/preset-env",
              {
                "targets": {
                  "chrome": "49",
                  "ios": "10"
                }
              }
            ]
          ],
          "plugins": []
        }
      },
      {
        test: /\.less$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              }
            }
          },
          "postcss-loader",
          "less-loader",
        ],
        include: /\.module\.less$/,
      },
      {
        test: /\.less$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
        exclude: /\.module\.less$/,
      },
      {
        test: /\.css$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ],
      },
      {
        test: /\.(png|jpg|jpeg|webp)$/,
        type: 'asset'
      }
    ]
  },
  resolve: {
    extensions: [".tsx", '.ts', '.js'],
    alias: {
      '@': resolvePath('src'),
    }
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    static: path.resolve(__dirname, './dist'),
    port: 6680,
  },
  devtool: 'eval-cheap-module-source-map',
  stats: 'errors-only',
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.DefinePlugin({
      __PATH__: JSON.stringify(isDev ? "/" : publicPath),
      process: JSON.stringify({
        env: {
          NODE_ENV: isDev ? 'development' : "production"
        }
      })
    }),
    //new BundleAnalyzerPlugin()
  ]
}
