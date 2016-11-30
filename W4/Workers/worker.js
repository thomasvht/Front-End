/**
* @Author: thomasvanhoutte
* @Date:   2016-10-19T11:05:26+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-19T11:52:29+02:00
*/



function processingWork(object){
  //haal data op
  //bereken iets
  loadJSON(object.data,
    function(data){ postMessage(data);},
    function(err){ }
  );
}

addEventListener("message", processingWork);

function loadJSON(path, succes, error){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
      if(succes){
        succes(JSON.parse(xhr.responseText));
      }
      else{
        if(error){
          error(xhr);
        }
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}
