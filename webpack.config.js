const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", // ✅ minifies JS and CSS automatically
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js", // cache-busting & split bundles
    clean: true,
    publicPath: "/solarconnect/",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    hot: true,
    open: true,
    allowedHosts: "all",
    client: {
      webSocketURL: "auto://0.0.0.0:3000/ws",
      historyApiFallback: true

    },
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // inline images <10kb
          },
        },
        generator: {
          filename: "images/[name].[contenthash][ext]",
        },
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 50,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.5, 0.7],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 60,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    splitChunks: {
      chunks: "all", // ✅ code splitting for faster load
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: false,
    }),
  ],
};
