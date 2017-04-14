import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { Settings } from '../pages/settings/settings';
import { SelectTranslation } from '../pages/select-translation/select-translation';
import { SelectChapter} from '../pages/select-chapter/select-chapter';
import { PassageParagraph } from '../pages/passage-paragraph/passage-paragraph';
import { PassageGrid } from '../pages/passage-grid/passage-grid';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    Settings,
    SelectTranslation,
    SelectChapter,
    PassageParagraph,
    PassageGrid
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    Settings,
    SelectTranslation,
    SelectChapter,
    PassageParagraph,
    PassageGrid
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
