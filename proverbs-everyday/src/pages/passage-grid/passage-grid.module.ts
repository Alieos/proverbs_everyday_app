import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PassageGrid } from './passage-grid';

@NgModule({
  declarations: [
    PassageGrid,
  ],
  imports: [
    IonicModule.forRoot(PassageGrid),
  ],
  exports: [
    PassageGrid
  ]
})
export class PassageGridModule {}
