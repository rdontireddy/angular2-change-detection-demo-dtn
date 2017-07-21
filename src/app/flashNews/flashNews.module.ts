import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlashNewsComponent } from './flashNews.component';
import { BulletinComponent } from './bulletin.component';
import { FlashNewsService } from './flashNews.service';
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FlashNewsComponent, BulletinComponent],
  providers: [FlashNewsService]
})
export class FlashNewsModule {
}
