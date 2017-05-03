import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { VerseModel } from './verse.model';

@NgModule({
    declarations: [
        ChapterModel
    ],
    imports: [
        IonicModule.forRoot(ChapterModel)
    ],
    exports: [
        ChapterModel
    ]
})

export class ChapterModel {

    constructor(
        public chapterNo: number,
        public chapterPassage: string,
        public verses: VerseModel[]
    ) {}

} //end ChapterModel class