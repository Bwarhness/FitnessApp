import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { DomSanitizer } from '@angular/platform-browser';
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
export class ExercisePage implements OnInit{
currentExercise:any = {};
myUrl:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public sanitizer: DomSanitizer) {
    this.currentExercise = navParams.data;
  }
  ngOnInit(){
    this.myUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.currentExercise.Exercise.VideoUrl + "?rel=0&amp;showinfo=0")
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisePage');
  }

}
