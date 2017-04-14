import { Component } from '@angular/core';

import { PassageParagraph } from '../passage-paragraph/passage-paragraph';
import { PassageGrid } from '../passage-grid/passage-grid';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PassageParagraph;
  tab2Root = PassageGrid;

  constructor() {

  }
} //end TabsPage class