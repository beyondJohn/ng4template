import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    isFinished = true;
    canActivate() {
        let myReturn = this.isFinished;
        this.isFinished = false;
        return myReturn;
    }
}
