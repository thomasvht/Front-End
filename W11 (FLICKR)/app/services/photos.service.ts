/**
* @Author: thomasvanhoutte
* @Date:   2016-12-14T09:44:21+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-14T11:06:19+01:00
*/



import { Injectable } from '@angular/core';
import { FlickrPhoto } from '../models/photo.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoService{
  constructor(private http:Http){}

  search(q:string){

    let url=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=88771b864072e1d626d76987ef84ca00&tags=${q}&format=json&nojsoncallback=1`;
    return this.http.get(url).map(this.parseData).catch(this.handleError);

  }

  private parseData(res:Response){
    let body = res.json();
    console.info(body);
    let photos:Array<FlickrPhoto> = [];
    body.photos.photo.forEach((p:any)=>{
      let ph: FlickrPhoto = new FlickrPhoto(
        p.title,
        p.id,
        p.secret,
        p.server,
        p.farm
      );

      photos.push(ph);
    });

    //let p1:FlickrPhoto = new FlickrPhoto("random", "j", "j", "j", "j");
    //let p2:FlickrPhoto = new FlickrPhoto("random", "j", "j", "j", "j");
    //photos.push(p1);
    //photos.push(p2);

    return photos;
  }

  private handleError(res:any){
    console.error(res);
    return Observable.throw(res);
  }
}
