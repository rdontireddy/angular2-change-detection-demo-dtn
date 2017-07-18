import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id = 'root';
  title = 'Angular Change Detection Demo App';
  message = '';
  whatIsChangeDetection = { firstName: 'Rajanikar', lastName: 'Dontireddy' };
  constructor(private _notificationService: NotificationService) {
    _notificationService.sendMessageSubject.subscribe((message) => {
      this.message = `${this.message} \n ${message}`;
    })
  }

  onUpdateSameReference() {
    this.whatIsChangeDetection.firstName = '';
    this.whatIsChangeDetection.lastName = '';
  }

  onCreateNewReference() {
    this.whatIsChangeDetection = { firstName: '', lastName: '' };
  }
}
