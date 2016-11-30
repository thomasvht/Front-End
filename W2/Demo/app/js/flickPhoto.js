/**
* @Author: thomasvanhoutte
* @Date:   2016-10-12T10:11:18+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-12T11:59:50+02:00
*/

function FlickrPhoto(id, owner, secret, server, farm){
  this.id = id;
  this.owner = owner;
  this.secret = secret;
  this.server = server;
  this.farm = farm;
}

FlickrPhoto.prototype.toUrl = function(){
  return "https://farm"+this.farm+".staticflickr.com/"+this.server+"/"+this.id+"_"+this.secret+".jpg";
};
