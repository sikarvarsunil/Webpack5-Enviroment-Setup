const { runtime } = require("webpack");

module.exports = {
  presets: ["@babel/preset-env",
    ["@babel/preset-react", {runtime: "automatic"}]
  ],
}