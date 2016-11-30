/**
* @Author: thomasvanhoutte
* @Date:   2016-10-05T08:54:00+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-05T08:55:50+02:00
*/



/**
 * Created by kevinderudder on 04/10/16.
 */
(function(global){
    var ui = (function(){
        return {
          getData: function(url){
              var p = new Promise(function(ok, nok){
                  var xmlhttp = new XMLHttpRequest();
                  xmlhttp.onerror = function(err){nok(err);};
                  xmlhttp.onload = function(resp){

                      if(xmlhttp.readyState === 4){
                          ok(JSON.parse(xmlhttp.responseText));
                      }

                  };
                  xmlhttp.open("GET", url, true);
                  xmlhttp.send();
              });
              return p;
          }
        };
    })();
    global.KDR = global.$ = {};
    global.KDR.UI = global.$.UI = ui;


})(window);
