/**
* @Author: thomasvanhoutte
* @Date:   2016-12-14T08:45:03+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-14T11:29:32+01:00
*/



import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoService } from './services/photos.service';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { PhotoComponent } from './photos/photo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  providers:    [ PhotoService ],
  declarations: [ AppComponent, PhotosComponent, PhotoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
