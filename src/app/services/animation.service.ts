import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AnimationService {
    //notifications
    notifymessage: object = {};
    notification = new BehaviorSubject<object>(this.notificationmessage());
    setNotification(message): void {
        this.notification.next(message);
    }
    private notificationmessage(): object {
        return this.notifymessage;
    }

    inqueComponents: object = {};
    inqueService = new BehaviorSubject<object>(this.getInqueMessage());
    setQues(message): void {
        //console.log("message: ", message);
        this.inqueComponents = message;
        this.notification.next(message);
    }
    private getInqueMessage(): object {
        return this.inqueComponents;
    }

}