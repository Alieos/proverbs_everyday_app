import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Settings } from './settings';

@NgModule({
  declarations: [
    Settings,
  ],
  imports: [
    IonicModule.forChild(Settings),
  ],
  exports: [
    Settings
  ]
})
export class SettingsModule {}
