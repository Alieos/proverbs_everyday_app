import { Component, ViewChild } from '@angular/core';
import { IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {}

} //end Tabs class