import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { SessionPage } from '../session/session';

/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})
export class ProgramPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _program: ExerciseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramPage');
  }
  openSession(name){
    this.navCtrl.push(SessionPage, name)
  }
}
