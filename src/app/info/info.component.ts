import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'info-component',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger('toggleState', [
      state('true', style({ position: 'relative', width: '100%', height: '100%', opacity: 0, transform: 'translateX(100%)' })),
      state('false', style({ position: 'relative', width: '100%', height: '100%', opacity: 1, transform: 'translateX(0%)' })),
      // transition
      transition('false => true', animate('300ms')),
    ])]
})
export class InfoComponent {
  constructor(private _animation: AnimationService) {

  }
  pleaseRemove = true;
  @Input() shouldToggle = false;
  title = 'info';
  ngOnInit() {

  }
  ngOnDestroy() {

  }
  remove() {
    this.shouldToggle = !this.shouldToggle;
    setTimeout(() => {
      this.pleaseRemove = false;

    }, 300);
  }
  animationStarted(ev) {
    if (!this.shouldToggle) {
      console.log("animation started: ", ev);
    }

  }
  adder = 0;
  animationDone(ev) {
    
    if (this.shouldToggle && this.adder === 0) {
      console.log("animation Done!");
      this._animation.setNotification({text:"finished"});
      this.adder++;
    }
    
  }
}