import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-redundant',
  templateUrl: './redundant.component.html',
  styleUrls: ['./redundant.component.css']
})
export class RedundantComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }
  report() {
    if(this._auth.isLoginSubject['value'] == true){
      return "Logged In stil working";
    } 
    else{
      return "Logged Out stil working";
    }
  }
}
