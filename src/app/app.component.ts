import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

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
export class AppComponent {
  constructor(
  ) { }
  title = 'app';
  // change the animation state
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
