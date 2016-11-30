/**
* @Author: thomasvanhoutte
* @Date:   2016-11-09T11:02:18+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-09T11:56:09+01:00
*/

var webpack = require("webpack");

module.exports = {
  entry : "./app/js/main.js",
  output : {
    path: "./wwwroot/js",
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
