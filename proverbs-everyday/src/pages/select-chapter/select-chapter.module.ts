import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectChapter } from './select-chapter';

@NgModule({
  declarations: [
    SelectChapter,
  ],
  imports: [
    IonicPageModule.forChild(SelectChapter),
  ],
  exports: [
    SelectChapter
  ]
})
export class SelectChapterModule {}
