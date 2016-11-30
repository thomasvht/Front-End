/**
* @Author: thomasvanhoutte
* @Date:   2016-10-19T09:57:06+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-19T11:02:01+02:00
*/

var validation = (function(){
  //private

  //public


  return {
    validateRequiredFields:function(){
    console.log("return function called.");
    var firstname = document.getElementById("first");
  },
  validateEmailField: function(){
    console.log("Validation of the email field.");
  }
};
})();

(function(){
  "use strict";
  validation.validateRequiredFields();
})();
