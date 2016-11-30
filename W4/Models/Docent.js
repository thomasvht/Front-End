/**
* @Author: thomasvanhoutte
* @Date:   2016-10-19T08:50:27+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-19T08:58:33+02:00
*
* class Docent {
*   ctor(){}
*   //methodes
*}
*/
// ctor function en je begint met een hoofdletter
function Docent(firstname, name, courses){
  this.firstname = firstname;
  this.name = name;
  this.courses = courses;
}

// niet ok
// Docent.prototype = {}
// wel ok
Docent.prototype.fullName = function(){
  return this.firstname + " " + this.name;
};

Docent.prototype.toString = function(){
  return this.fullName();
};

//var casanova = new Docent("Johan", "Vannieuwenhuyse", ["backend", "SSA", "web", "verleidingstechnieken 101"]);
