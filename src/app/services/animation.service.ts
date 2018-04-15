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

}