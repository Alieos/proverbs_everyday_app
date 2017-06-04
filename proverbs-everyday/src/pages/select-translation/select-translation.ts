import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import passages from '../../data/passages';
import { Translation } from '../../data/translation.interface';

import { PassagesService } from '../../services/passages.service';

@IonicPage()
@Component({
  selector: 'page-select-translation',
  templateUrl: 'select-translation.html',
  providers: [PassagesService]
})
export class SelectTranslation {
  translations: Translation[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _passagesService: PassagesService) {
  }

  ngOnInit() {
    this.translations = passages;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectTranslation');
    console.log(passages);
  }

  gotoChapter(translation: Translation) {
    this._passagesService.selectedTranslationId = translation.id;
    this.navCtrl.push('SelectChapter');
  }

} //end SelectTranslation class