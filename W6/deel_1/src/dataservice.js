/**
* @Author: thomasvanhoutte
* @Date:   2016-11-09T09:01:39+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-09T10:02:39+01:00
*/


// klassieke manier
// var dataService = (function(){
//   var data = "data Klassieke manier";
//   return {
//     get: function(){
//       return data;
//     }
//   };
// })();

// AMD
// define("dataService", [], function(){
//   var data = "data AMD";
//   return {
//     get: function(){
//       return data;
//     }
//   };
// });

// CommonJS
/*
var data = "data CommonJS";
function get(){
  return data;
}
exports.get = get;
*/

// ES 6

var data = "data ES 6";
export function get(){
  return data;
}
