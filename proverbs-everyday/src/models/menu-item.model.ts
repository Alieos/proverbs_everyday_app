import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'

@NgModule({
  declarations: [
    MenuItemModel,
  ],
  imports: [
    IonicModule.forRoot(MenuItemModel)
  ],
  exports: [
    MenuItemModel
  ]
})

export class MenuItemModel {

    constructor(
        public pageName:string,
        public displayText:string,
        public iconName:string
    ) {}

} //end MenuItem class