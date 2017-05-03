import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
    declarations: [
        TranslationModel,
    ],
    imports: [
        IonicModule.forRoot(TranslationModel)
    ],
    exports: [
        TranslationModel
    ]
})

export class TranslationModel {

    constructor (
        name: string,
        abbr: string,
        copyright: string
    ) {}

} //end TranslationModel class