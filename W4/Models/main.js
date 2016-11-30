/**
* @Author: thomasvanhoutte
* @Date:   2016-10-19T09:00:10+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-19T11:04:15+02:00
*/
// jquery
//var courses = $.getJSON();

// angular
//var courses = angular.$http();

//var courses = nmct.getJSON();
  var txtFirst, txtLast, txtCourses;

  function init(){
    txtFirst = document.getElementById("first");
    txtLast = document.getElementById("last");
    txtCourses = document.getElementById("course");
    addEventListeners();
  }

  init();

  function addEventListeners(){
    txtFirst.addEventListener("input", downloadJSAtOnload);
    txtLast.addEventListener("input", downloadJSAtOnload);
    txtCourses.addEventListener("input", downloadJSAtOnload);
  }

  function downloadJSAtOnload(){
    var element = document.createElement("script");
    element.src = "./js/validator.js";
    document.body.appendChild(element);
  }
  if(window.addEventListener)
    window.addEventListener("load", downloadJSAtOnload, false);
  else if(window.attachEvent){
    windows.attachEvent("onload", downloadJSAtOnload);
  }
  else{
    window.onload = downloadJSAtOnload;
  }
