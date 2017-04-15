import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SelectChapter } from './select-chapter';

@NgModule({
  declarations: [
    SelectChapter,
  ],
  imports: [
    IonicModule.forChild(SelectChapter),
  ],
  exports: [
    SelectChapter
  ]
})
export class SelectChapterModule {}
