import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'nav-component',
    templateUrl: "./nav.component.html",
    styleUrls: ['./nav.component.css']
})
export class NavComponent {
    constructor(private _router: Router,private myRoute: ActivatedRoute) {
        this.myRoute.data.subscribe(routeevent => {console.log("home component routing change: ", routeevent)});
    }
    home() {
        this._router.navigate(['home']);
    }
    info() {
        this._router.navigate(['info']);
    }
    ngOnInit() {

    }
    ngOnDestroy() {

    }
} 
