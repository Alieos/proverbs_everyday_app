import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  NavParams } from 'ionic-angular';

import { PassagesService } from '../../providers/passages.service';
import { Translation } from '../../data/translation.interface';
import { Chapter } from '../../data/chapter.interface';

@IonicPage()
@Component({
  selector: 'page-passage-paragraph',
  templateUrl: 'passage-paragraph.html',
})
export class PassageParagraph {

  private _selectedTranslation: Translation = null;
  private _selectedChapter: Chapter = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _passagesService: PassagesService) {
      this._selectedTranslation = this._passagesService.selectedTranslation;
      this._selectedChapter = this._passagesService.getSelectedChapter();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassageParagraph');
  }

  previousChapterNo() {
    --this._passagesService.selectedChapterNo;
    this._selectedChapter = this._passagesService.getSelectedChapter();
  }

  nextChapterNo() {
    ++this._passagesService.selectedChapterNo;
    this._selectedChapter = this._passagesService.getSelectedChapter();
  }

} //end PassageParagraph page