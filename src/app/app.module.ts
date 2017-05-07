import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MinePage } from '../pages/mine/mine';
import { MorePage } from '../pages/more/more';
import { HomePage } from '../pages/home/home';
import { NursingPage } from '../pages/nursing/nursing';
import { TabsPage } from '../pages/tabs/tabs';
import { CatPage } from '../pages/cat/cat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {IonicStorageModule, Storage} from "@ionic/storage";


//加载HTTP插件
import {HttpService} from "../providers/HttpService";
import {PromptService} from "../providers/PromptService";

//加载知识库服务
import { KnowledgeService } from '../pages/home/KnowledgeService';

//加载Model
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    MorePage,
    MinePage,
    HomePage,
    NursingPage,
    TabsPage,
    CatPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MorePage,
    MinePage,
    HomePage,
    NursingPage,
    TabsPage,
    CatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    PromptService,
    KnowledgeService
  ],

})
export class AppModule {}
