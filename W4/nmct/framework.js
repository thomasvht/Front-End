/**
* @Author: thomasvanhoutte
* @Date:   2016-10-19T09:02:16+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-19T09:19:16+02:00
// EXAMEN VRAAG => CLOSURE
function a (){
  var var1;
  function b (){
    // deze var staat private voor alles buiten deze functie
    var var2;
  }
}
*/
//nmct.getJSON(url");

//var nmct = {};
//nmct.getJSON = function(url){};

// basis van module pattern
// een self invoking function dat een object terug geeft
var nmct = (function(){
  // private gedeelte
  var url = "http//api.twitter.com";
  return {
    getJSON: function(url){
      if(!url){
        url = this.url;
      }
    },
    postJSON: function(url, data){}
  };
})();
