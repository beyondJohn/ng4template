import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../services/authguard.service';

@Component({
    selector: 'nav-component',
    templateUrl: "./nav.component.html",
    styleUrls: ['./nav.component.css']
})
export class NavComponent {
    currentUrl = "";
    adder = 0;
    constructor(
        private _router: Router, 
        private myRoute: ActivatedRoute,
        private _authguard: AuthGuard
    ) {
        this._router.events.subscribe(event => this.routeEvent(event));
    }
    home() {
        console.log("clicked home");
        this._authguard.isFinished = true;
        this._router.navigate(['home']);
    }
    routeEvent(ev) {
        if(ev.constructor.name === "NavigationStart"){
            this.currentUrl = ev['url'];
            if(this.currentUrl === '/'){
                console.log('NavigationStart startup url');
            }
            else if(this.currentUrl !== '/' && this.adder > 0){
                console.log("NavigationStart routing: ", ev['url']);
            }
            else{
                console.log("NavigationStart with existing url: ", ev['url'])
            }
            this.adder++;
        }
        
    }
    info() {
        this._authguard.isFinished = false;
        console.log("",this._authguard.isFinished);
        this._router.navigate(['info']);
    }
    ngOnInit() {

    }
    ngOnDestroy() {

    }
} 
