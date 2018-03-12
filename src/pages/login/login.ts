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
Username:any;
Password:any;
loading:any = false;
error:any = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public _loginProvider: LoginProvider, public _exercise : ExerciseProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  submit(){    
    
    this.loading = true;
    console.log(this.Username,this.Password)
    this._loginProvider.Login(this.Username, this.Password).subscribe(
      (data) => {
        console.log(data);
        this._exercise.getProgram().subscribe(
          (test) => {
            console.log(test)
            this.loading = false;
            this.navCtrl.push(TabsPage);
          },
          () => 
          {
            this.loading = false;
            this.error = "An error happend. Im sorry"
          }
        )
      },
      () => {
        this.loading = false;
        this.error = "An error happend. Im sorry"
      }
    )
  }

}
