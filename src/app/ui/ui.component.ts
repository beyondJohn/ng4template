import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent{

  constructor(private _auth: AuthService) { }
  report() {
    if(this._auth.isLoginSubject['value'] == true){
      return "Logged In";
    } 
    else{
      return "Logged Out";
    }
  }
  
  btnclick() {

    console.log(this._auth.isLoginSubject['_value']);
  }
  btnclicklogin() {

    this._auth.login();
  }
  btnclicklogout() {

    this._auth.logout();
  }
}
