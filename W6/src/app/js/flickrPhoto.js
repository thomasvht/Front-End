/**
* @Author: thomasvanhoutte
* @Date:   2016-11-09T10:59:52+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-09T11:54:50+01:00
*/



/**
 * Created by kevinderudder on 12/10/16.
 */

export class FlickrPhoto{
  constructor(id, owner, secret, server, farm){
    this.id = id;
    this.owner = owner;
    this.secret = secret;
    this.server = server;
    this.farm = farm;
}

toUrl(){
  return "https://farm"+this.farm+".staticflickr.com/"+this.server+"/"+this.id+"_"+this.secret+".jpg";
}
}

// FlickrPhoto.prototype.toUrl = function(){
//     return "https://farm"+this.farm+".staticflickr.com/"+this.server+"/"+this.id+"_"+this.secret+".jpg";
// };



/*
var f = new FlickrPhoto();
f.toUrl();
*/
