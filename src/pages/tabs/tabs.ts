import { Component } from '@angular/core';


import { LoginPage } from '../login/login';
import { SessionPage } from '../session/session';
import { ProgramPage } from '../program/program';
import { ExercisePage } from '../exercise/exercise';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = SessionPage;
  tab2Root = ProgramPage;
  tab3Root = SettingsPage;

  constructor(public navCtrl:NavController) {

  }
}
