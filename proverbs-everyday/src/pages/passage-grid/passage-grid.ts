import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-passage-grid',
  templateUrl: 'passage-grid.html',
})
export class PassageGrid {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassageGrid');
  }

} //end PassageGrid class