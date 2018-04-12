import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-component',
    templateUrl: "./nav.component.html",
    styleUrls: ['./nav.component.css']
})
export class NavComponent{
    constructor(private _router: Router){
    }
    home(){
        this._router.navigate(['home']);
    }
    info(){
        this._router.navigate(['info']);
    }
} 
