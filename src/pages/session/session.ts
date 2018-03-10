import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExercisePage } from '../exercise/exercise';
import { ExerciseProvider } from '../../providers/exercise/exercise';

/**
 * Generated class for the SessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-session',
  templateUrl: 'session.html',
})
export class SessionPage {
currentSession:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _exercise: ExerciseProvider) {
    console.log(navParams)    
    this.currentSession = _exercise.program.sessions.find(p => p.name == navParams.data)
    if(!this.currentSession){
      this.currentSession = _exercise.program.sessions[0];
    }
    console.log(this.currentSession)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionPage');
  }
  openExercise(data){
    this.navCtrl.push(ExercisePage,data);
  }
}
