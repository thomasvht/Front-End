/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _logservice = __webpack_require__(1);

	var logservice = _interopRequireWildcard(_logservice);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	logservice.log(); /**
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.log = log;

	var _dataservice = __webpack_require__(2);

	var dataservice = _interopRequireWildcard(_dataservice);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function log() {
	  console.log(dataservice.get());
	} /**
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.get = get;
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
	function get() {
	  return data;
	}

/***/ }
/******/ ]);