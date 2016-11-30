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

	/**
	* @Author: thomasvanhoutte
	* @Date:   2016-11-09T09:06:12+01:00
	* @Last modified by:   thomasvanhoutte
	* @Last modified time: 2016-11-09T09:41:38+01:00
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
	var logservice = __webpack_require__(1);
	logservice.log();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* @Author: thomasvanhoutte
	* @Date:   2016-11-09T09:03:21+01:00
	* @Last modified by:   thomasvanhoutte
	* @Last modified time: 2016-11-09T09:41:49+01:00
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

	var dataservice = __webpack_require__(2);
	function log(){
	  console.log(dataservice.get());
	}
	exports.log = log;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	* @Author: thomasvanhoutte
	* @Date:   2016-11-09T09:01:39+01:00
	* @Last modified by:   thomasvanhoutte
	* @Last modified time: 2016-11-09T09:39:01+01:00
	*/


	// klassieke manier
	// var dataService = (function(){
	//   var data = "data";
	//   return {
	//     get: function(){
	//       return data;
	//     }
	//   };
	// })();

	// AMD
	// define("dataService", [], function(){
	//   var data = "data";
	//   return {
	//     get: function(){
	//       return data;
	//     }
	//   };
	// });

	// CommonJS
	var data = "data";
	function get(){
	  return data;
	}
	exports.get = get;


/***/ }
/******/ ]);