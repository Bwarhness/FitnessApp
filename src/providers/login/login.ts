import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import 'rxjs/add/operator/map';     
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

Token:any;
  constructor(public http: HttpClient, public _apiProvider: ApiProvider) {
    console.log('Hello LoginProvider Provider');
    
  }
  Login(name, password){
    let data = "username="+name+"&password="+password+"&grant_type=password"
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'})
    return this.http.post(this._apiProvider.Api + "/token", data, {headers:reqHeader}).map((p:any) => {
      this._apiProvider.Token = p.access_token;
    })
  }

}
