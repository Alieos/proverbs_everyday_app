import { Component, ViewChild } from '@angular/core';
import {
  Platform,
  NavController,
  MenuController
} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuItemModel } from '../models/menu-item.model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = 'Tabs';
  @ViewChild('nav') navCtrl: NavController;

  menuItems = [
    new MenuItemModel('Tabs', 'Today\'s Proverb', 'quote'),
    new MenuItemModel('SelectTranslation', 'Bible Translations', 'book'),
    new MenuItemModel('Settings', 'Settings', 'settings')
  ];

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  gotoPage(pageName:string) {
    //this.navCtrl.push(pageName);
    this.navCtrl.setRoot(pageName);
    this.menuCtrl.close();
  }

} //end MyApp class