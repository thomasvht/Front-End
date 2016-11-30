/**
* @Author: thomasvanhoutte
* @Date:   2016-11-23T12:04:04+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-28T23:25:13+01:00
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
/**
* @Author: thomasvanhoutte
* @Date:   2016-11-23T11:11:19+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-28T23:25:13+01:00
*/
var core_1 = require('@angular/core');
var Login = (function () {
    function Login() {
    }
    Login.prototype.checkPassword = function () {
        if (this.password != this.passwordRepeat) {
            this.warningMessage = "Passwords are not the same!";
        }
        else {
            this.warningMessage = "";
        }
    };
    Login = __decorate([
        core_1.Component({
            selector: "login",
            template: "\n  <div>\n  <h2>Login</h2>\n  <div>\n  <label>Email: </label>\n  <input type=\"email\" />\n  </div>\n  <div>\n  <label>Firstname: </label>\n  <input type=\"text\"  />\n  </div>\n  <div>\n  <label>Lastname: </label>\n  <input type=\"text\" />\n  </div>\n  <div>\n  <label>Password: </label>\n  <input type=\"password\" [(ngModel)]=\"password\" />\n  </div>\n  <div>\n  <label>Password control: </label>\n  <input type=\"password\" (blur)=\"checkPassword()\" [(ngModel)]=\"passwordRepeat\" />\n  </div>\n  <p style=\"color: red\">{{warningMessage}}</p>\n  <button (click)=\"checkPassword()\">Login</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=Login.js.map