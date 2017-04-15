import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassageGrid } from './passage-grid';

@NgModule({
  declarations: [
    PassageGrid,
  ],
  imports: [
    IonicPageModule.forChild(PassageGrid),
  ],
  exports: [
    PassageGrid
  ]
})
export class PassageGridModule {}
