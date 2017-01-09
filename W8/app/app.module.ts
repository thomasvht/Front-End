/**
* @Author: thomasvanhoutte
* @Date:   2017-01-05T18:36:36+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-09T14:22:46+01:00
*/



import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './Login/login.component';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { SubscribeNewsLetter } from './Subscribe/subscribe.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LoginComponent, SubscribeNewsLetter ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
