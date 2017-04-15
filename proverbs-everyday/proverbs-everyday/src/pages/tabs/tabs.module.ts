import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Tabs } from './tabs';

@NgModule({
  declarations: [
    Tabs,
  ],
  imports: [
    IonicModule.forChild(Tabs),
  ],
  exports: [
    Tabs
  ]
})
export class TabsModule {}
