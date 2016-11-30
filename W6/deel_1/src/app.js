/**
* @Author: thomasvanhoutte
* @Date:   2016-11-09T09:06:12+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-09T10:06:33+01:00
*/
// klassieke manier
// (function(logservice){
//   logservice.log();
// })(logService);

// AMD
// require(["./logService.js"], function(logservice){
//   logservice.log();
// });

// CommonJS
//var logservice = require("./logservice.js");
//logservice.log();

// ES 6

import * as logservice from "./logservice.js";
logservice.log();
