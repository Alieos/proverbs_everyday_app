import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Translation } from '../../data/translation.interface';
import { Chapter } from '../../data/chapter.interface';
import { PassagesService } from '../../providers/passages.service';

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
      private _passagesService: PassagesService) {
    this._translation = this._passagesService.selectedTranslation;
    console.log(this._passagesService.selectedTranslationId);
    this._chapters = this._translation.chapters;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectChapter');
  }

  gotoPassage(translationId: number, chapterNo: number) {
    this._passagesService.selectedTranslationId = translationId;
    this._passagesService.selectedChapterNo = chapterNo;
    this.navCtrl.push('Tabs');
  }

} //end SelectChapter