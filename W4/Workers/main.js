/**
* @Author: thomasvanhoutte
* @Date:   2016-10-19T11:06:24+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-19T11:50:24+02:00
*/



(function () {
  "use strict";

  var btn = document.querySelector("button");
  var worker;

  function onSucceeded(resp) {
    console.info(resp);
  }

  function onError(resp) {
    console.info(resp);
  }

  function startWorker_Clicked() {
    worker = new Worker('worker.js');
    worker.onmessage = onSucceeded;
    worker.onerror = onError;

    worker.postMessage("http://datatank.stad.gent/4/gezondheid/apotheken.json");
  }

  function addEventListeners(){
    btn.addEventListener("click", startWorker_Clicked);
  }

  addEventListeners();
})();
