/**
* @Author: thomasvanhoutte
* @Date:   2017-01-09T14:04:29+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-09T14:05:16+01:00
*/



import {Component} from '@angular/core';

@Component({
  selector: "subscribe",
  template: `
  <div>
  <h2>Register</h2>
  <label>Email:</label>
  <input type="email" [(ngModel)]="email" />
  <p>{{message}}</p>
  <p>subscribed on {{subscribeDate|date: 'dd/MM/yyyy'}}</p>
  <button (click)="registerEmail()">subscribe</button>
  </div>
  `
})

export class SubscribeNewsLetter{
  email: string = "thomas.vanhoutte.tv@gmail.com";
  message: string = "enter email an hit subscribe.";
  subscribeDate: Date;

  registerEmail(){
    this.subscribeDate = new Date();
    this.message = "Thank you for subscribing.";
    }
}
