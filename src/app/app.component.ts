import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
import { ActivatedRoute, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './services/authguard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('toggleState', [
      state('true' , style({ position: 'relative',width: '100%',height: '100%',opacity: 0,transform: 'translateX(100%)' })),
      state('false', style({ position: 'relative',width: '100%',height: '100%',opacity: 1,transform: 'translateX(0%)' })),
      // transition
      transition('* => *', animate('300ms')),
    ]),
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
          { optional: true }),
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
          { optional: true }),
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
          { optional: true }),
      ])
    ])
  ]
})
export class AppComponent implements CanActivate {
  constructor(
    private route: Router,
    private _animation: AnimationService 
  ) {}
  @Input() shouldToggle = false;
  title = 'app';
  currentActivated = "";
  // change the animation state
  getRouteAnimation(outlet) {
    try { 
      this.currentActivated = outlet['activated']['_elDef']['element']['name']; 
      this._animation.setQues({outgoing:this.currentActivated, incoming:''});
    }
    catch (e) { 
      this.currentActivated = ''; 
    }
    return outlet.activatedRouteData.animation;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return true;
  }
  remove(){
    this.shouldToggle = !this.shouldToggle;
  }
}
