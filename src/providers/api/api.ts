import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
Api = "http://fitnessapi.webdesk-dev.dk";
Token:any;
  constructor(public http: HttpClient) {
  }

  generateHTTPPost(endpoint, body){
    var reqHeader = new HttpHeaders({'Authorization':'Bearer ' + this.Token})

    return this.http.post(this.Api + endpoint, body, {headers:reqHeader})
  }
  generateHTTPPut(endpoint, body){
    var reqHeader = new HttpHeaders({'Authorization':'Bearer ' + this.Token})

    return this.http.put(this.Api + endpoint, body, {headers:reqHeader})
  }
  generateHTTPGet(endpoint){
    var reqHeader = new HttpHeaders({'Authorization':'Bearer ' + this.Token})

    return this.http.get(this.Api + endpoint, {headers:reqHeader})
  } 

}