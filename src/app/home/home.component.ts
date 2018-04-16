import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AnimationService } from '../services/animation.service';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('toggleState', [
      state('true', style({ position: 'relative', width: '100%', height: '100%', opacity: 0, transform: 'translateX(100%)' })),
      state('false', style({ position: 'relative', width: '100%', height: '100%', opacity: 1, transform: 'translateX(0%)' })),
      // transition
      transition('false => true', animate('300ms ease')),
    ])]
})
export class HomeComponent implements OnInit {
  show = true;
  @Input() shouldToggle = false;
  constructor(
    private _router: Router,
    private _animation: AnimationService
  ) {
  }
  ngOnInit() {
    this._animation.inqueService.subscribe(message => this.remove(message));
  }
  ngOnDestroy() {
    //console.log("destroy");
  }
  remove(msg) {
    console.log("my Home message", msg);
    try {
      if (this._animation.inqueComponents['outgoing'].split("-")[1] === "home") {
        this.shouldToggle = !this.shouldToggle;
        setTimeout(() => {
          this.show = false;
          let homeElement = document.getElementsByTagName("app-home");
          homeElement[0].parentNode.removeChild(homeElement[0]);
        }, 300);
      }
    }
    catch (e) {

    }

  }
  animationDone(ev) {
    console.log('finished');
    this._router.navigate(['info']);

  }

}
