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
        id: number,
        versePassage: string
    ) {}

} //end VerseModel class