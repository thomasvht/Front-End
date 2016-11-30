/**
* @Author: thomasvanhoutte
* @Date:   2016-10-26T09:30:14+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-26T11:03:48+02:00
*/
beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    }
  });
});

beforeEach(function () {
  jasmine.addMatchers({
    toBeBetween: function() {
      return{
        compare: function (actual, min, max) {
          var calc = actual;
          return{
            pass: actual > min && actual < max
          };
        }
      };
    }
  });
});
