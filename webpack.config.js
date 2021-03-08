const path = require("path");

module.exports = {
  entry: "./marp-slide.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "marp-slide.bundle.js",
    clean: true,
  },
  resolve: {
    fallback: { path: require.resolve("path-browserify") },
  },
   optimization: {
    minimize: true,
  },
};
