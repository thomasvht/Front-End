/**
* @Author: thomasvanhoutte
* @Date:   2016-11-23T11:02:34+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-09T13:47:56+01:00
*/



import { NgModule }      from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { SubscribeNewsLetter }  from './Registers';
import {Login} from './Login';
//import {DirectivesDemo} from './directivesDemo.component';
import {Direct} from 'protractor/built/driverProviders';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Login, SubscribeNewsLetter ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
