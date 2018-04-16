import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
import { AnimationService } from '../services/animation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'info-component',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger('toggleState', [
      state('true', style({ position: 'relative', width: '100%', height: '100%', opacity: 0, transform: 'translateX(100%)' })),
      state('false', style({ position: 'relative', width: '100%', height: '100%', opacity: 1, transform: 'translateX(0%)' })),
      // transition
      transition('false => true', animate('300ms ease')),
    ])]
})
export class InfoComponent {
  constructor(
    private _animation: AnimationService,
    private _router: Router
  ) {

  }
  show = true;
  @Input() shouldToggle = false;
  title = 'info';
  ngOnInit() {
    this._animation.inqueService.subscribe(message => this.remove(message));
  }
  ngOnDestroy() {

  }
  remove(msg) {
    console.log("my Info message", msg);
    try {
      if (this._animation.inqueComponents['outgoing'].split("-")[0] === "info") {
        this.shouldToggle = !this.shouldToggle;
        setTimeout(() => {
          this.show = false;
          let infoElement = document.getElementsByTagName("info-component");
          infoElement[0].parentNode.removeChild(infoElement[0]);
        }, 300);
      }
    }
    catch (e) {

    }
  }
  adder = 0;
  animationDone(ev) {
    //console.log('finished');
    this._router.navigate(['home']);
  }
}