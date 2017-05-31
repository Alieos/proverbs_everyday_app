import passages from '../data/passages';

import { Translation } from '../data/translation.interface';
import { Chapter } from '../data/chapter.interface';

export class PassageService {

    private _selectedTranslationId: number = 5;

    get selectedTranslationId(): number {
        return this._selectedTranslationId;
    }
    set selectedTranslationId(theSelectedTranslationId: number) {
        this._selectedTranslationId = theSelectedTranslationId;
    }



} //end PassageService class