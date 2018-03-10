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
    this.program = 
    {
      'name':'Starting Strength',
      'sessions' : [
        {
          'name':'ben',
          'exercises': [
            {
              'name':'squat',
              'reps': 5,
              'sets': 5,
              'tempo' : 4021
            },
            {
              'name':'Bænk',
              'reps': 5,
              'sets': 5,
              'tempo' : 4021
            },
            {
              'name':'Død',
              'reps': 5,
              'sets': 5,
              'tempo' : 4021
            }
          ]
        },
        {
          'name':'Biceps',
          'exercises': [
            {
              'name':'Biceps',
              'reps': 5,
              'sets': 5,
              'tempo' : 4021
            },
            {
              'name':'Arm',
              'reps': 5,
              'sets': 5,
              'tempo' : 4021
            },
            {
              'name':'Hår',
              'reps': 5,
              'sets': 5,
              'tempo' : 4021
            }
          ]
        }
      ]

    }
  }
}
