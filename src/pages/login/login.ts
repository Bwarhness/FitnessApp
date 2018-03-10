import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { TabsPage } from '../tabs/tabs';
import { ExerciseProvider } from '../../providers/exercise/exercise';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
Name:any = "nalar94@gmail.com";
Password:any = "buster";
loading:any = false;
error:any = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public _loginProvider: LoginProvider, public _exercise : ExerciseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  submit(){
    this._exercise.getProgram()
    
    this.navCtrl.push(TabsPage);
    
    this.loading = true;

    this._loginProvider.Login(this.Name, this.Password).subscribe(
      (data) => {
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.error = "An error happend. Im sorry"
      }
    )
  }

}
