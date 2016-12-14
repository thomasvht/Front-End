/**
* @Author: thomasvanhoutte
* @Date:   2016-12-14T08:53:39+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-14T09:05:30+01:00
*/



export class Photo{
  constructor(public title: string, public url: string){

  }
}

export class FlickrPhoto extends Photo{
  constructor(title:string, id:any, secret:string, server:string, farm:any){
    let url= `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    super(title, url);
  }
}
