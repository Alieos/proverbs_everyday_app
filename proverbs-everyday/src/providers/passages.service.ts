import { Injectable } from '@angular/core';
import { Translation } from '../data/translation.model';
import { Chapter } from '../data/chapter.model';

import passages from '../data/passages';

@Injectable()
export class PassagesService {

    // Variables -----------------------------------------------------------------------
    private _selectedTranslationId:number = 5;
    get selectedTranslationId():number {
        return this._selectedTranslationId;
    }
    set selectedTranslationId(theSelectedTranslationId:number) {
        this._selectedTranslationId = theSelectedTranslationId;
        this._selectedTranslation = this.getTranslationBySelectedTranslationId();
    }

    private _selectedTranslation:Translation = null;
    get selectedTranslation():Translation {
        return this._selectedTranslation;
    }

    constructor() {
        this._selectedTranslation = this.getTranslationBySelectedTranslationId();
    }

    private _selectedChapterNo:number = 1;
    get selectedChapterNo():number {
        return this._selectedChapterNo;
    }
    set selectedChapterNo(theSelectedChapterNo:number) {
        this._selectedChapterNo = theSelectedChapterNo;
    }

    // Functions -----------------------------------------------------------------------
    getTranslationBySelectedTranslationId():Translation {
        return passages.find((translationEl: Translation) => {
            return this._selectedTranslationId == translationEl.id;
        });
    }

    getTranslationById(translationId:number):Translation {
        return passages.find((translationEl:Translation) => {
            return translationId == translationEl.id;
        });
    }

    getSelectedTranslationChapters():Chapter[] {
        return this._selectedTranslation.chapters.slice();
    }

    getSelectedChapter():Chapter {
        var selectedChapters: Chapter[] = this.getSelectedTranslationChapters();
        return selectedChapters.find((chapterEl: Chapter) => {
            return this._selectedChapterNo == chapterEl.chapterNo;
        });
    }
    
    getSelectedTranslationChapter(chapterNo: number):Chapter {
        var selectedChapters: Chapter[] = this.getSelectedTranslationChapters();
        return selectedChapters.find((chapterEl: Chapter) => {
            return chapterNo == chapterEl.chapterNo;
        });
    }

} //end PassagesService class
