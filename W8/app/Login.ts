/**
* @Author: thomasvanhoutte
* @Date:   2016-11-23T12:04:04+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-28T23:25:13+01:00
*/



/**
* @Author: thomasvanhoutte
* @Date:   2016-11-23T11:11:19+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-28T23:25:13+01:00
*/
import {Component} from '@angular/core';

@Component({
  selector: "login",
  template: `
  <div>
  <h2>Login</h2>
  <div>
  <label>Email: </label>
  <input type="email" />
  </div>
  <div>
  <label>Firstname: </label>
  <input type="text"  />
  </div>
  <div>
  <label>Lastname: </label>
  <input type="text" />
  </div>
  <div>
  <label>Password: </label>
  <input type="password" [(ngModel)]="password" />
  </div>
  <div>
  <label>Password control: </label>
  <input type="password" (blur)="checkPassword()" [(ngModel)]="passwordRepeat" />
  </div>
  <p style="color: red">{{warningMessage}}</p>
  <button (click)="checkPassword()">Login</button>
  </div>
  `
})

export class Login{
  firstname: string;
  lastname: string;
  email: string;
  warningMessage: string;
  password: string;
  passwordRepeat: string;

  checkPassword(){
    if(this.password != this.passwordRepeat){
        this.warningMessage = "Passwords are not the same!";
    }else{
        this.warningMessage = "";
    }
  }
}
