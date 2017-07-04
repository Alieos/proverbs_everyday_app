import { Component, ViewChild } from '@angular/core';
import {
  Platform,
  NavController,
  MenuController
} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PassagesService } from '../providers/passages.service';
import { MenuItemModel } from '../models/menu-item.model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = 'Tabs';
  @ViewChild('nav') navCtrl: NavController;

  menuItems = [
    new MenuItemModel('SelectTranslation', 'Bible Translations', 'book'),
    new MenuItemModel('Settings', 'Settings', 'settings')
  ];

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _passagesService: PassagesService,
    private _menuCtrl: MenuController ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.selectTodaysChapter();
  }

  todaysChapterHandler() {
    this.selectTodaysChapter();
    this.navCtrl.setRoot('Tabs');
  }

  gotoPage(pageName:string) {
    //this.navCtrl.push(pageName);
    this.navCtrl.setRoot(pageName);
    this._menuCtrl.close();
  }

  private selectTodaysChapter() {
    let today = new Date();
    this._passagesService.selectedChapterNo = today.getDate();
  }

} //end MyApp class