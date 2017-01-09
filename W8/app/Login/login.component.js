/**
* @Author: thomasvanhoutte
* @Date:   2017-01-09T14:04:12+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-09T14:20:39+01:00
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
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.checkPassword = function () {
        if (this.password != this.passwordRepeat) {
            this.warningMessage = "Passwords are not the same!";
        }
        else {
            this.warningMessage = "";
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            template: "<div>\n  <h2>Login</h2>\n  <div>\n  <label>Email: </label>\n  <input type=\"email\" />\n  </div>\n  <div>\n  <label>Firstname: </label>\n  <input type=\"text\"  />\n  </div>\n  <div>\n  <label>Lastname: </label>\n  <input type=\"text\" />\n  </div>\n  <div>\n  <label>Password: </label>\n  <input type=\"password\" [(ngModel)]=\"password\" />\n  </div>\n  <div>\n  <label>Password control: </label>\n  <input type=\"password\" (blur)=\"checkPassword()\" [(ngModel)]=\"passwordRepeat\" />\n  </div>\n  <p style=\"color: red\">{{warningMessage}}</p>\n  <button (click)=\"checkPassword()\">Login</button>\n  </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map