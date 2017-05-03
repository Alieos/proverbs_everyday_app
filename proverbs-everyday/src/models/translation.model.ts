import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ChapterModel } from './chapter.model';

@NgModule({
    declarations: [
        TranslationModel
    ],
    imports: [
        IonicModule.forRoot(TranslationModel)
    ],
    exports: [
        TranslationModel
    ]
})

export class TranslationModel {

    constructor(
        public id: number,
        public name: string,
        public abbr: string,
        public copyright: string,
        public chapters: ChapterModel[]
    ) {}

} //end TrsnlationModel class