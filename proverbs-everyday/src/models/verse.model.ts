import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
    declarations: [
        VerseModel
    ],
    imports: [
        IonicModule.forRoot(VerseModel)
    ],
    exports: [
        VerseModel
    ]
})

export class VerseModel {

    constructor(
        verseNo: number,
        versePassage: string
    ) {}

} //end VerseModel class