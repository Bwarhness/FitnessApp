import { Component } from '@angular/core';


import { LoginPage } from '../login/login';
import { SessionPage } from '../session/session';
import { ProgramPage } from '../program/program';
import { ExercisePage } from '../exercise/exercise';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = SessionPage;
  tab2Root = ProgramPage;
  tab3Root = ExercisePage;

  constructor() {

  }
}
