import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {
  sendMessageSubject: Subject<string> = new Subject<string>();
}
