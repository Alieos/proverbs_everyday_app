import passages from '../data/passages';

import { Translation } from '../data/translation.interface';
import { Chapter } from '../data/chapter.interface';

export class TranslationService {

    private _selectedTranslationId: number = 5;
    get selectedTranslationId(): number {
        return this._selectedTranslationId;
    }
    set selectedTranslationId(theSelectedTranslationId: number) {
        this._selectedTranslationId = theSelectedTranslationId;
    }

    private _selectedTranslation: Translation = null;
    get selectedTranslation(): Translation {
        return this._selectedTranslation;
    }

    constructor() {
        this._selectedTranslation = this.getTranslationBySelectedTranslationId();
    }

    getTranslationBySelectedTranslationId(): Translation {
        return passages.find((translationEl: Translation) => {
            return this._selectedTranslationId == translationEl.id;
        });
    }

    getTranslationById(translationId: number): Translation {
        return passages.find((translationEl: Translation) => {
            return translationId == translationEl.id;
        });
    }

    getSelectedTranslationChapters(): Chapter[] {
        return this._selectedTranslation.chapters.slice();
    }

} //end TranslationService class