import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Translation } from '../../data/translation.interface';
import { Chapter } from '../../data/chapter.interface';
import { Passages } from '../../providers/passages';

@IonicPage()
@Component({
  selector: 'page-select-chapter',
  templateUrl: 'select-chapter.html',
})
export class SelectChapter {
  private _translation: Translation;
  private _chapters: Chapter[];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private _passagesService: Passages) {
    this._translation = this._passagesService.selectedTranslation;
    console.log(this._passagesService.selectedTranslationId);
    this._chapters = this._translation.chapters;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectChapter');
  }

  gotoPassage(translationId: number, chapterNo: number) {
    //console.log('translation id: ' + translationId, 'chapter no: ' + chapterNo);
    this.navCtrl.push('Tabs');
  }

} //end SelectChapter