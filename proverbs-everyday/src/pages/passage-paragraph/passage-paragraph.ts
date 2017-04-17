import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-passage-paragraph',
  templateUrl: 'passage-paragraph.html',
})
export class PassageParagraph {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassageParagraph');
  }

} //end PassageParagraph page