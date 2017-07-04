import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  NavParams } from 'ionic-angular';

import { PassagesService } from '../../providers/passages.service';
import { Translation } from '../../data/translation.interface';
import { Chapter } from '../../data/chapter.interface';
import { Verse } from '../../data/verse.interface';

@IonicPage()
@Component({
  selector: 'page-passage-grid',
  templateUrl: 'passage-grid.html',
})
export class PassageGrid {

  private _selectedTranslation: Translation = null;
  private _selectedChapter: Chapter = null;
  private _versePassages: Verse[] = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _passagesService: PassagesService) {
      this._selectedTranslation = this._passagesService.selectedTranslation;
      this._selectedChapter = this._passagesService.getSelectedChapter();
      this._versePassages = this._passagesService.getSelectedVerses();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassageGrid');
  }

} //end PassageGrid class