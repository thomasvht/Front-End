/**
* @Author: thomasvanhoutte
* @Date:   2016-12-14T08:53:39+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-14T09:05:30+01:00
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Photo = (function () {
    function Photo(title, url) {
        this.title = title;
        this.url = url;
    }
    return Photo;
}());
exports.Photo = Photo;
var FlickrPhoto = (function (_super) {
    __extends(FlickrPhoto, _super);
    function FlickrPhoto(title, id, secret, server, farm) {
        var url = "https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + ".jpg";
        _super.call(this, title, url);
    }
    return FlickrPhoto;
}(Photo));
exports.FlickrPhoto = FlickrPhoto;
//# sourceMappingURL=photo.model.js.map