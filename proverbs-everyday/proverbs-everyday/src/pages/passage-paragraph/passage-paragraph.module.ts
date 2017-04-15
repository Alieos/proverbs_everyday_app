import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PassageParagraph } from './passage-paragraph';

@NgModule({
  declarations: [
    PassageParagraph,
  ],
  imports: [
    IonicModule.forChild(PassageParagraph),
  ],
  exports: [
    PassageParagraph
  ]
})
export class PassageParagraphModule {}
