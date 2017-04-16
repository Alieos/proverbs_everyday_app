import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectTranslation } from './select-translation';

@NgModule({
  declarations: [
    SelectTranslation,
  ],
  imports: [
    IonicPageModule.forChild(SelectTranslation),
  ],
  exports: [
    SelectTranslation
  ]
})
export class SelectTranslationModule {}
