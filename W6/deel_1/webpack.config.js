/**
* @Author: thomasvanhoutte
* @Date:   2016-11-09T09:45:36+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-09T10:17:49+01:00
*/

var webpack = require("webpack");

module.exports = {
  entry : "./src/app.js",
  output : {
    path: "./wwwroot",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
