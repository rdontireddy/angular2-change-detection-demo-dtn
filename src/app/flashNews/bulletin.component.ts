import { Component, Input } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-fn-bulletin',
  templateUrl: 'bulletin.component.html'
})
export class BulletinComponent {
  _article: Article = null;
  @Input()
  set article(value: Article) {
    this._article = value;
  }
}
