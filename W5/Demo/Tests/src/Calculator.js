/**
* @Author: thomasvanhoutte
* @Date:   2016-10-26T09:43:01+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-26T10:05:15+02:00
*/



function Calculator(){
}
Calculator.prototype.add = function(a,b) {
  return a+b;
};
Calculator.prototype.devide = function(a,b) {
  return a/b;
};
Calculator.prototype.multiply = function(a,b) {
  return a*b;
};
Calculator.prototype.substract = function(a,b) {
  return a-b;
};
