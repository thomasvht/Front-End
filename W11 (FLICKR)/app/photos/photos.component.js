/**
* @Author: thomasvanhoutte
* @Date:   2016-12-14T09:07:20+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-14T11:12:10+01:00
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
var photos_service_1 = require('../services/photos.service');
// meta data
var PhotosComponent = (function () {
    function PhotosComponent(svc) {
        this.svc = svc;
    }
    PhotosComponent.prototype.search = function () {
        var _this = this;
        var result;
        this.svc.search(this.q).subscribe(function (data) { return _this.photos = data; }, function (error) { return console.error(error); });
        //console.info("searching..." + result);
    };
    PhotosComponent = __decorate([
        core_1.Component({
            selector: "photos",
            templateUrl: "./app/photos/photos.view.html",
        }), 
        __metadata('design:paramtypes', [photos_service_1.PhotoService])
    ], PhotosComponent);
    return PhotosComponent;
}());
exports.PhotosComponent = PhotosComponent;
//# sourceMappingURL=photos.component.js.map