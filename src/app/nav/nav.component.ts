import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../services/authguard.service';
import { AnimationService } from '../services/animation.service';

@Component({
    selector: 'nav-component',
    templateUrl: "./nav.component.html",
    styleUrls: ['./nav.component.css']
})
export class NavComponent {
    constructor(
        private _router: Router,
        private myRoute: ActivatedRoute,
        private _authguard: AuthGuard,
        private _animation: AnimationService
    ) {}
    ngOnInit() {
        this._animation.notification.subscribe(message => this.animationChangeEvent(message));
    }
    finished = false;
    animationChangeEvent(msg) {

        if (msg['status'] === 'finished') {
            this.finished = true;
        }
    }
    home() {
        if (this.finished) {
            try {
                let checkQue = this._animation.inqueComponents;
                let letTry = checkQue["incoming"];
                if (checkQue["outgoing"].indexOf('home') === -1) {
                    this.finished = false;
                    this._animation.setNotification({ status: "inprogress" });
                    checkQue["incoming"] = "app-home";
                    this._animation.inqueService.next(checkQue);
                    this._authguard.isFinished = true;
                }
            }
            catch (e) {

            }
        }
    }
    info() {
        if (this.finished) {
            try {
                let checkQue = this._animation.inqueComponents;
                let letTry = checkQue["incoming"];
                if (checkQue["outgoing"].indexOf('info') === -1) {
                    this.finished = false;
                    this._animation.notification.next({ status: "inprogress" });
                    checkQue["incoming"] = "app-info";
                    this._animation.inqueService.next(checkQue);
                    this._authguard.isFinished = true;
                }
            }
            catch (e) {

            }
        }
    }

    ngOnDestroy() {

    }
} 
