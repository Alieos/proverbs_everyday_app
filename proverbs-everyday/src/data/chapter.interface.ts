import { Verse } from './verse.interface';

export interface Chapter {

    chapterNo: number;
    chapterPassage: string;
    versePassages: Verse[];

} //end Chapter interface