/**
 * Created by kevinderudder on 12/10/16.
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



/*
var f = new FlickrPhoto();
f.toUrl();
*/
