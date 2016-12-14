/**
* @Author: thomasvanhoutte
* 2016-12-14T11:19:39+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-14T11:32:52+01:00
*/



import { Component, Input } from '@angular/core';

@Component({
  selector: 'photo',
  template: `
  <figure>
    <img src="{{url}}"
         title="{{title}}"
         alt="{{title}}" />
         <figcaption>{{title}}</figcaption>
  </figure>
  `
})

export class PhotoComponent{
  @Input() url: string;
  @Input() title: string;
}
