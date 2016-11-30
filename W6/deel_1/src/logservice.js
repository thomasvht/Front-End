/**
* @Author: thomasvanhoutte
* @Date:   2016-11-09T09:03:21+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-09T10:05:53+01:00
*/
// klassieke manier

// var logService = (function(dataservice){
//   return {
//     log: function(){
//       console.log(dataservice.get());
//     }
//   };
// })(dataService);

// AMD
//
// define("logService", ["./dataService"], function(dataservice){
//   return {
//          log: function(){
//          console.log(dataservice.get());
//        }
//      };
// });

// CommonJS
/*
var dataservice = require("./dataservice.js");
function log(){
  console.log(dataservice.get());
}
exports.log = log;
*/

// ES 6

import * as dataservice from "./dataservice.js";
export function log(){
  console.log(dataservice.get());
}
