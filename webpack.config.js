const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "popup-sdk.js",
    path: path.resolve(__dirname, "dist"),
    library: "PopupSDK",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./examples/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/template.html", to: "" }],
    }),
  ],
  mode: "production",
};
