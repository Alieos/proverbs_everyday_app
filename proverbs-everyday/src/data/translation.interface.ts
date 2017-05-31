import { Chapter } from './chapter.interface';

export interface Translation {

    id:         number;
    name:       string;
    abbr:       string;
    copyright:  string;
    chapters:   Chapter[];

} //end Translation interface