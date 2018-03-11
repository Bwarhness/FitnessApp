import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

/*
  Generated class for the ExerciseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExerciseProvider {
  program:any = [];

  constructor(public http: HttpClient, public api: ApiProvider) {
    console.log('Hello ExerciseProvider Provider');
    
  }
  getProgram(){
    return this.api.generateHTTPGet('/api/GetProgramForUser').map(
      (p) => {
        console.log(p);
        this.program = p
      }
    )
  }
}
