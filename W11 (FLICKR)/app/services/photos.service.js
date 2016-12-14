/**
* @Author: thomasvanhoutte
* @Date:   2016-12-14T09:44:21+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-14T11:06:19+01:00
*/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var photo_model_1 = require('../models/photo.model');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var PhotoService = (function () {
    function PhotoService(http) {
        this.http = http;
    }
    PhotoService.prototype.search = function (q) {
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=88771b864072e1d626d76987ef84ca00&tags=" + q + "&format=json&nojsoncallback=1";
        return this.http.get(url).map(this.parseData).catch(this.handleError);
    };
    PhotoService.prototype.parseData = function (res) {
        var body = res.json();
        console.info(body);
        var photos = [];
        body.photos.photo.forEach(function (p) {
            var ph = new photo_model_1.FlickrPhoto(p.title, p.id, p.secret, p.server, p.farm);
            photos.push(ph);
        });
        //let p1:FlickrPhoto = new FlickrPhoto("random", "j", "j", "j", "j");
        //let p2:FlickrPhoto = new FlickrPhoto("random", "j", "j", "j", "j");
        //photos.push(p1);
        //photos.push(p2);
        return photos;
    };
    PhotoService.prototype.handleError = function (res) {
        console.error(res);
        return Observable_1.Observable.throw(res);
    };
    PhotoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PhotoService);
    return PhotoService;
}());
exports.PhotoService = PhotoService;
//# sourceMappingURL=photos.service.js.map