import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
import { ActivatedRoute, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthGuard } from './services/authguard.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            height: '100%',
            opacity: 0,
            transform: 'translateX(-100%)'
          }),
          {optional: true}),
        // move page off screen right on leave
        query(':leave',
          animate('400ms ease',
            style({
              position: 'fixed',
              width: '100%',
              height: '100%',
              opacity: 0,
              transform: 'translateX(100%)'
            })
          ),
        {optional: true}),
        // move page in screen from left to right
        query(':enter',
          animate('400ms ease',
            style({
              position: 'fixed',
              width: '100%',
              height: '100%',
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional: true}),
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy, CanActivate {
  constructor(private route: Router) { 

  }
  
  title = 'app';
  currentActivated = "";
  // change the animation state
  getRouteAnimation(outlet) {
    console.log("Outlet: ",outlet);
    
    try{this.currentActivated = outlet['activated']['_elDef']['element']['name'];}
    catch(e){this.currentActivated = '';}
    
    console.log("CurrentActivated: ",this.currentActivated);
   
    return outlet.activatedRouteData.animation;
  }
  ngOnInit(){

  }
  ngOnDestroy(){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log("canActivate");
    return true;
  }
}
