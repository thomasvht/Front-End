/**
* @Author: thomasvanhoutte
* @Date:   2017-01-09T14:04:29+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-09T14:05:16+01:00
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
var SubscribeNewsLetter = (function () {
    function SubscribeNewsLetter() {
        this.email = "thomas.vanhoutte.tv@gmail.com";
        this.message = "enter email an hit subscribe.";
    }
    SubscribeNewsLetter.prototype.registerEmail = function () {
        this.subscribeDate = new Date();
        this.message = "Thank you for subscribing.";
    };
    SubscribeNewsLetter = __decorate([
        core_1.Component({
            selector: "subscribe",
            template: "\n  <div>\n  <h2>Register</h2>\n  <label>Email:</label>\n  <input type=\"email\" [(ngModel)]=\"email\" />\n  <p>{{message}}</p>\n  <p>subscribed on {{subscribeDate|date: 'dd/MM/yyyy'}}</p>\n  <button (click)=\"registerEmail()\">subscribe</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SubscribeNewsLetter);
    return SubscribeNewsLetter;
}());
exports.SubscribeNewsLetter = SubscribeNewsLetter;
//# sourceMappingURL=subscribe.component.js.map