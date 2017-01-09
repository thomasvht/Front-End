/**
* @Author: thomasvanhoutte
* @Date:   2017-01-05T18:36:36+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-09T14:21:22+01:00
*/



import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <login></login>
  <subscribe></subscribe>
  `,
})
export class AppComponent  { name = 'Angular'; }
