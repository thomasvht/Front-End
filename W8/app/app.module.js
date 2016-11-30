/**
* @Author: thomasvanhoutte
* @Date:   2016-11-23T11:02:34+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-30T08:54:50+01:00
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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var Registers_1 = require('./Registers');
var Login_1 = require('./Login');
var directivesDemo_component_1 = require('./directivesDemo.component');
//import {Direct} from 'protractor/built/driverProviders';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [Registers_1.SubscribeNewsLetter, Login_1.Login, directivesDemo_component_1.DirectivesDemo],
            bootstrap: [Registers_1.SubscribeNewsLetter, Login_1.Login,