import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SessionPage } from '../pages/session/session';
import { ProgramPage } from '../pages/program/program';
import { ExercisePage } from '../pages/exercise/exercise';
import { LoginProvider } from '../providers/login/login';
import { ApiProvider } from '../providers/api/api';
import { ExerciseProvider } from '../providers/exercise/exercise';
import { LoadingModule } from 'ngx-loading';
import { SettingsPage } from '../pages/settings/settings';
@NgModule({
  declarations: [
    MyApp,
    ProgramPage,
    SessionPage,
    SettingsPage,
    TabsPage,
    LoginPage,
    ExercisePage
  ],
  imports: [
    LoadingModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ExercisePage,
    MyApp,
    ProgramPage,
    SessionPage,
    SettingsPage,
    TabsPage,
    LoginPage

  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginProvider,
    ApiProvider,
    ExerciseProvider
  ]
})
export class AppModule { }
