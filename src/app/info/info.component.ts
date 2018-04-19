import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
import { AnimationService } from '../services/animation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'info-component',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger('toggleState', [
      state('true', style({ position: 'absolute', width: '100%', height: '100%', opacity: 0, transform: 'translateX(100%)' })),
      state('false', style({ position: 'absolute', width: '100%', height: '100%', opacity: 1, transform: 'translateX(0%)' })),
      // transition
      transition('false => true', animate('300ms ease')),
    ])]
})
export class InfoComponent {
  constructor(
    private _animation: AnimationService,
    private _router: Router
  ) {}
  show = true;
  @Input() shouldToggle = false;
  title = 'info';
  ngOnInit() {
    this._animation.inqueService.subscribe(message => this.remove(message));
  }
  remove(msg) {
    try {
      if (this._animation.inqueComponents['outgoing'].split("-")[0] === "info") {
        this.shouldToggle = !this.shouldToggle;
        setTimeout(() => {
          try {
            this.show = false;
            let homeElement = document.getElementsByTagName("info-component");
            homeElement[0].parentNode.removeChild(homeElement[0]);
          } 
          catch (e) {}
        }, 10000);
      }
    }
    catch (e) {}
  }
  animationDone(ev) {
    this._router.navigate(['home']);
    this._animation.notification.next({ status: "finished" });
  }
}