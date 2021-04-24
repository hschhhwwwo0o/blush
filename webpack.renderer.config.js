const rules = require("./webpack.rules");

rules.push({
  test: /\.styl$/,
  use: [
    { loader: "style-loader" }, 
    { loader: "css-loader" }, 
    { loader: "stylus-loader" }
  ],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
