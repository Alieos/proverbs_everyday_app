import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import passages from '../../data/passages';
import { Translation } from '../../data/translation.interface';
import { PassagesService } from '../../providers/passages.service';

@IonicPage()
@Component({
  selector: 'page-select-translation',
  templateUrl: 'select-translation.html',
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
    //console.log(passages);
  }

  gotoChapter(translation: Translation) {
    this._passagesService.selectedTranslationId = translation.id;
    //console.log(this._passagesService.selectedTranslationId);
    //console.log(this._passagesService.selectedTranslation);
    this.navCtrl.push('SelectChapter');
  }

} //end SelectTranslation class