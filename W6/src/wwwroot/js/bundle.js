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

	var _flickrPhoto = __webpack_require__(1);

	(function () {
	    "use strict";

	    var searchButton, filter, imagesList;
	    function renderImages(images) {
	        // <li></li>
	        var bobTheHTMLBuilder = "",
	            l = images.photos.photo.length;

	        for (var i = 0; i < l; i++) {
	            var o = images.photos.photo[i];
	            var fphoto = new _flickrPhoto.FlickrPhoto(o.id, o.owner, o.secret, o.server, o.farm);

	            bobTheHTMLBuilder += '<li class="media">';
	            bobTheHTMLBuilder += '<img src="' + fphoto.toUrl() + '" class="media__element" />';
	            bobTheHTMLBuilder += '</li>';
	        }

	        imagesList.innerHTML = bobTheHTMLBuilder;
	    }

	    function parseUrl(flickrObject) {
	        return "https://farm" + flickrObject.farm + ".staticflickr.com/" + flickrObject.server + "/" + flickrObject.id + "_" + flickrObject.secret + ".jpg";
	    }

	    function handleError(error) {
	        console.error(error);
	    }
	    function loadImages() {
	        var searchText = filter.value;
	        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2c2fe03cc43d41864febfadedd03d4ec&tags=" + searchText + "&format=json&nojsoncallback=1";

	        $.UI.getData(url).then(renderImages, handleError);
	    }

	    function addEventListeners() {
	        searchButton.addEventListener("click", loadImages);
	    }

	    function init() {
	        searchButton = document.getElementById("searchButton");
	        filter = document.getElementById("filter");
	        imagesList = document.querySelector(".image__list");

	        addEventListeners();
	    }
	    init();
	})(); /**
	      * @Author: thomasvanhoutte
	      * @Date:   2016-11-09T10:59:52+01:00
	      * @Last modified by:   thomasvanhoutte
	      * @Last modified time: 2016-11-09T12:01:43+01:00
	      * Created by kevinderudder on 05/10/16.
	       */

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	* @Author: thomasvanhoutte
	* @Date:   2016-11-09T10:59:52+01:00
	* @Last modified by:   thomasvanhoutte
	* @Last modified time: 2016-11-09T11:54:50+01:00
	*/

	/**
	 * Created by kevinderudder on 12/10/16.
	 */

	var FlickrPhoto = exports.FlickrPhoto = function () {
	  function FlickrPhoto(id, owner, secret, server, farm) {
	    _classCallCheck(this, FlickrPhoto);

	    this.id = id;
	    this.owner = owner;
	    this.secret = secret;
	    this.server = server;
	    this.farm = farm;
	  }

	  _createClass(FlickrPhoto, [{
	    key: "toUrl",
	    value: function toUrl() {
	      return "https://farm" + this.farm + ".staticflickr.com/" + this.server + "/" + this.id + "_" + this.secret + ".jpg";
	    }
	  }]);

	  return FlickrPhoto;
	}();

	// FlickrPhoto.prototype.toUrl = function(){
	//     return "https://farm"+this.farm+".staticflickr.com/"+this.server+"/"+this.id+"_"+this.secret+".jpg";
	// };


	/*
	var f = new FlickrPhoto();
	f.toUrl();
	*/

/***/ }
/******/ ]);