import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassageParagraph } from './passage-paragraph';

@NgModule({
  declarations: [
    PassageParagraph,
  ],
  imports: [
    IonicPageModule.forChild(PassageParagraph),
  ],
  exports: [
    PassageParagraph
  ]
})
export class PassageParagraphModule {}
