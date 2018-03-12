import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
username = '';
  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams, public login:LoginProvider) {
    this.username = login.username;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  logOut(){
    this.app.getRootNav().setRoot(LoginPage);
  }
}
