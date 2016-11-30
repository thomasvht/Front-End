/**
* @Author: thomasvanhoutte
* @Date:   2016-10-26T11:38:27+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-09T12:03:23+01:00
*/

(function(global) {
  "use strict";

  var svc = (function() {
    //private

    //public

    return{
      getPhotos: function(){
        /*var a = new Array();
        var fi = new FlickrPhoto(1, "owner", "secret", "server", "farm");
        a.push(fi);
        return a;*/
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2c2fe03cc43d41864febfadedd03d4ec&tags=nmct&format=json&nojsoncallback=1";
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false);
        xmlHttp.send();

        var data = JSON.parse(xmlHttp.responseText);
        var a = new Array();

        for(var i = 0, l = data.photos.photo.length; i < l; i++){
          var currentItem = data.photos.photo[i];
          var fi = new FlickrPhoto(currentItem.id,
                currentItem.owner,
                currentItem.secret,
                currentItem.server,
                currentItem.farm);
          a.push(fi);
        }
        return a;
      }
    };
  })();
  global.flickrService = svc;
})(window);
