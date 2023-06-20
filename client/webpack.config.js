const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CriticalCssPlugin = require("critical-css-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CriticalCssPlugin({
      base: path.resolve(__dirname, "dist"),
      src: "index.html",
      inline: true,
      dimensions: [{ width: 1920, height: 1080 }],
      penthouse: {
        blockJSRequests: false,
      },
    }),
    // new CriticalCssPlugin({
    //   base: path.resolve(__dirname, "dist"),
    //   src: "index.html",
    //   // dest: "index.html",
    //   inline: true,
    //   // minify: true,
    //   extract: true,
    //   dimensions: [{ width: 1920, height: 1080 }],
    // }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
};