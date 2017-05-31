import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import passages from '../../data/passages';
import { Translation } from '../../data/translation.interface';

@IonicPage()
@Component({
  selector: 'page-select-translation',
  templateUrl: 'select-translation.html',
})
export class SelectTranslation {
  translations: Translation[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ngOnInit() {
    this.translations = passages;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectTranslation');
    console.log(passages);
  }

  gotoChapter(translation: Translation) {
    console.log('Translation: ', translation.id, translation.abbr);
  }

} //end SelectTranslation class