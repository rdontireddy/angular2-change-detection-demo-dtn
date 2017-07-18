import { Component, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, AfterViewInit, Input, Output } from '@angular/core';
import { NotificationService } from 'app/notification.service';

@Component({
  selector: 'what-is-cd',
  templateUrl: 'whatIsCd.component.html'
})
export class WhatIsCdComponent implements DoCheck, AfterViewInit {
  id = 'C1';
  title = 'What Is Change Detection?';
  _model: any;
  message = '';
  constructor(private _notificationService: NotificationService, private _cd: ChangeDetectorRef) {
    this.model = { firstName: '', lastName: '' }
  }

  @Input()
  set model(value: any) {
    this._model = value;
  }

  onReset() {
    this._model.firstName = '';
    this._model.lastName = '';
    this.message = '';
  }

  ngDoCheck(): void {
    this._notificationService.sendMessageSubject.next(this.id + ' Change Detected');
  }
  ngAfterViewInit(): void {
    // this._cd.detach();
  }


}

export class WhatIsCdModel {
  firstName: string;
  lastName: string;
  constructor() {
    this.firstName = '';
    this.lastName = ''
  }
}
