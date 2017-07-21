import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FlashNewsService } from './flashNews.service';
import { Article } from './article';

@Component({
  selector: 'app-fn',
  templateUrl: 'flashNews.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlashNewsComponent implements OnInit {
  articles: Article[] = []
  _markToCheck = false;
  constructor(private _newsService: FlashNewsService, private _cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this._newsService.getNews().subscribe((article) => {
      this.articles.push(article);
      console.log(article.description);
      if (this._markToCheck) {
        this._cd.markForCheck();
      };
    })
  }

  onResetNews() {
    this.articles = [];
  }

  onDummyClick() {

  }
}
