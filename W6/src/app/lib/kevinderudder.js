/**
* @Author: thomasvanhoutte
* @Date:   2016-10-25T07:26:30+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-26T11:32:45+02:00
*/
(function(global){
    var ui = (function(){
        return {
          getData: function(url){
              var p = new Promise(function(ok, nok){
                //vanaf hier
                  var xmlhttp = new XMLHttpRequest();
                  xmlhttp.onerror = function(err){nok(err);};
                  xmlhttp.onload = function(resp){

                      if(xmlhttp.readyState === 4){
                          ok(JSON.parse(xmlhttp.responseText));
                      }

                  };
                  xmlhttp.open("GET", url, true);
                  xmlhttp.send();

                  //tot hier
              });
              return p;
          }
        };
    })();
    global.KDR = global.$ = {};
    global.KDR.UI = global.$.UI = ui;


})(window);
