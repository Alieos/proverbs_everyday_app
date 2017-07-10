import { Injectable } from '@angular/core';
import { Translation } from '../data/translation.interface';
import { Chapter } from '../data/chapter.interface';
import { Verse } from '../data/verse.interface';

import passages from '../data/passages';

@Injectable()
export class PassagesService {

    // === Variables ===================================================================
    private _selectedTranslationId: number = 5;
    get selectedTranslationId(): number {
        return this._selectedTranslationId;
    }
    set selectedTranslationId(theSelectedTranslationId: number) {
        this._selectedTranslationId = theSelectedTranslationId;
        this._selectedTranslation = this.getTranslationBySelectedTranslationId();
    }

    private _selectedTranslation: Translation = null;
    get selectedTranslation(): Translation {
        return this._selectedTranslation;
    }

    private _selectedChapterNo: number = 1;
    get selectedChapterNo(): number {
        return this._selectedChapterNo;
    }
    set selectedChapterNo(theSelectedChapterNo: number) {
        // check if selected chapter no is between 1 and
        // the total no of chapters in the selected translation
        let numOfChapters: number = this.findChapters(this._selectedTranslationId).length;
        if(theSelectedChapterNo < 1) {
            theSelectedChapterNo = numOfChapters;
            console.log('Warning! selectedChapterNo (' + theSelectedChapterNo + ') must be greater than 1.');
        } else if(theSelectedChapterNo >= (numOfChapters + 1)) {
            theSelectedChapterNo = 1;
            console.log('Warning! selectedChapterNo (' + theSelectedChapterNo + ') exceeded total chapters [' + numOfChapters + '].');
        }
        console.log('selectedChapterNo ', theSelectedChapterNo);
        this._selectedChapterNo = theSelectedChapterNo;
    }

    // === Functions ===================================================================
    constructor() {
        this._selectedTranslation = this.getTranslationBySelectedTranslationId();
    }

    // --- Selected --------------------------------------------------------------------
    getTranslationBySelectedTranslationId(): Translation {
        return passages.find((translationEl: Translation) => {
            return this._selectedTranslationId == translationEl.id;
        });
    }

    getSelectedTranslationChapters(): Chapter[] {
        return this._selectedTranslation.chapters.slice();
    }

    getSelectedChapter(): Chapter {
        var selectedChapters: Chapter[] = this.getSelectedTranslationChapters();
        return selectedChapters.find((chapterEl: Chapter) => {
            return this._selectedChapterNo == chapterEl.chapterNo;
        });
    }

    getSelectedVerses(): Verse[] {
        var selectedChapter = this.getSelectedChapter();
        return selectedChapter.versePassages;
    }

    // --- Find Functions --------------------------------------------------------------
    findTranslation(translationId: number): Translation {
        return passages.find((translationEl: Translation) => {
            return translationId == translationEl.id;
        });
    }

    findChapters(translationId: number): Chapter[] {
        var translation: Translation = this.findTranslation(translationId);
        return translation.chapters.slice();
    }
    
    findChapter(translationId: number, chapterNo: number): Chapter {
        var translation: Translation = this.findTranslation(translationId);
        return translation.chapters.find((chapterEl: Chapter) => {
            return chapterNo == chapterEl.chapterNo;
        });
    }

    findVerses(translationId: number, chapterNo: number): Verse[] {
        var translation: Translation = this.findTranslation(translationId);
        var chapter: Chapter = translation.chapters.find((chapterEl: Chapter) => {
            return chapterNo == chapterEl.chapterNo;
        });
        return chapter.versePassages;
    }

} //end PassagesService class
