import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PassagesService } from '../../services/passages.service';
import { Translation } from '../../data/translation.interface';
import { Chapter } from '../../data/chapter.interface';

@IonicPage()
@Component({
  selector: 'page-select-chapter',
  templateUrl: 'select-chapter.html',
  providers: [PassagesService]
})
export class SelectChapter {
  private _translation: Translation;
  private _chapters: Chapter[];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private _passagesService: PassagesService) {
    this._translation = this._passagesService.selectedTranslation;
    this._chapters = this._translation.chapters;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectChapter');
  }

} //end SelectChapter