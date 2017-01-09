/**
* @Author: thomasvanhoutte
* @Date:   2016-11-23T11:10:14+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-09T13:42:19+01:00
*/



import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
