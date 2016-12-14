/**
* @Author: thomasvanhoutte
* @Date:   2016-12-14T09:07:20+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-14T11:12:10+01:00
*/



import { Component } from '@angular/core';
import { PhotoService } from '../services/photos.service';
import { FlickrPhoto } from '../models/photo.model';

// meta data
@Component({
  selector: "photos",
  templateUrl: "./app/photos/photos.view.html",
})
// component ==> class

export class PhotosComponent{
  photos:Array<FlickrPhoto>;
  q:string;

  constructor(private svc:PhotoService){

  }

  search(){
    let result : Array<FlickrPhoto>;
    this.svc.search(this.q).subscribe(
      (data:Array<FlickrPhoto>) => this.photos = data,
      (error:any) => console.error(error)
    );
    //console.info("searching..." + result);
  }
}
