import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    isFinished = true;
    canActivate() {
        let myReturn = true;
        console.log('AuthGuard#canActivate called isFinished:', this.isFinished);
        //myReturn = this.isFinished;
        return myReturn;
    }
}
