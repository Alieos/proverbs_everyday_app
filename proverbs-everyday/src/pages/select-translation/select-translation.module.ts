import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SelectTranslation } from './select-translation';

@NgModule({
  declarations: [
    SelectTranslation,
  ],
  imports: [
    IonicModule.forRoot(SelectTranslation),
  ],
  exports: [
    SelectTranslation
  ]
})
export class SelectTranslationModule {}
