/**
* @Author: thomasvanhoutte
* 2016-12-14T11:19:39+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-14T11:32:52+01:00
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
var PhotoComponent = (function () {
    function PhotoComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PhotoComponent.prototype, "url", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PhotoComponent.prototype, "title", void 0);
    PhotoComponent = __decorate([
        core_1.Component({
            selector: 'photo',
            template: "\n  <figure>\n    <img src=\"{{url}}\"\n         title=\"{{title}}\"\n         alt=\"{{title}}\" />\n         <figcaption>{{title}}</figcaption>\n  </figure>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PhotoComponent);
    return PhotoComponent;
}());
exports.PhotoComponent = PhotoComponent;
//# sourceMappingURL=photo.component.js.map