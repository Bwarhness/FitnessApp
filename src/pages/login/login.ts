import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { TabsPage } from '../tabs/tabs';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public _loginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  submit(){
    this._loginProvider.Login(this.Name, this.Password).subscribe(
      () => {
        this.navCtrl.push(TabsPage);
      }
    )
  }

}
