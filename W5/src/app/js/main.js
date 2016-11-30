/**
 * Created by kevinderudder on 05/10/16.
 */
(function(){
    "use strict";


    var searchButton, filter, imagesList;

    function renderImages(images){
        // <li></li>
        var bobTheHTMLBuilder = "",
            l = images.photos.photo.length;

        for(var i = 0 ; i < l ; i++){
            var o = images.photos.photo[i];
            var fphoto = new FlickrPhoto(o.id,o.owner,o.secret, o.server,o.farm);


            bobTheHTMLBuilder += '<li class="media">';
            bobTheHTMLBuilder += '<img src="'+fphoto.toUrl()+'" class="media__element" />'
            bobTheHTMLBuilder += '</li>';
        }

        imagesList.innerHTML = bobTheHTMLBuilder;
    }

    function parseUrl(flickrObject){
        return "https://farm"+flickrObject.farm+".staticflickr.com/"+flickrObject.server+"/"+flickrObject.id+"_"+flickrObject.secret+".jpg";
    }

    function handleError(error){
        console.error(error);
    }
    function loadImages(){
        var searchText = filter.value;
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8513536db7983082a3b2b889fb275a3d&tags="+searchText+"&format=json&nojsoncallback=1";

        $.UI.getData(url).then(renderImages, handleError);
    }


    function addEventListeners(){
        searchButton.addEventListener("click", loadImages);
    }

    function init(){
        searchButton = document.getElementById("searchButton");
        filter = document.getElementById("filter");
        imagesList = document.querySelector(".image__list")

        addEventListeners();
    }
    init();


})();