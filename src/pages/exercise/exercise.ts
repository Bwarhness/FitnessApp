import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExerciseProvider } from '../../providers/exercise/exercise';

/**
 * Generated class for the ExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {
currentExercise = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentExercise = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisePage');
  }

}
