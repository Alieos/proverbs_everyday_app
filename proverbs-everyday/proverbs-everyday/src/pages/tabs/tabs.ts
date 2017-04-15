import { Component, ViewChild } from '@angular/core';
import { IonicPage,
  NavController,
  NavParams,
  MenuController
} from 'ionic-angular';

import { MenuItemModel } from '../../models/menu-item.model';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {
  menuItems = [
    new MenuItemModel('Tabs', 'Today\'s Proverb', 'quote'),
    new MenuItemModel('SelectTranslation', 'Bible Translations', 'book'),
    new MenuItemModel('Settings', 'Settings', 'settings')
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController) {}

  gotoPage(pageName:string) {
    this.navCtrl.push(pageName);
    this.menuCtrl.close();
  }

} //end Tabs class