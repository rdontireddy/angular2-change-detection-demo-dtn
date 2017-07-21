import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as moment from 'moment';

import { Article } from './article';

@Injectable()
export class FlashNewsService {
  _news = [
    { description: 'Tabs Team Is Going to have their potluck soon', releaseTime: moment() },
    { description: 'Lately Tabs Event organizer being lazy to plan team events', releaseTime: moment().add(5, 'seconds') }
  ]

  getNews(): Observable<Article> {
    const subject = new Subject<Article>();
    let i = 0;
    setInterval(() => {
      subject.next(this._news[i]);
      i++;
      if (i === this._news.length) { i = 0 }
    }, 5000);
    return subject.asObservable();
  }
}
