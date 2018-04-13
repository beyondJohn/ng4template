import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    isFinished = false;
    canActivate() {
        let myReturn = false;
        console.log('AuthGuard#canActivate called isFinished:', this.isFinished);
        this.isFinished === true ? myReturn = true : myReturn = false;
        return myReturn;
    }
}
