import { Component } from '@angular/core';

import { MinePage } from '../mine/mine';
import { MorePage } from '../more/more';
import { NursingPage } from '../nursing/nursing';
import { HomePage } from '../home/home';

import {App,NavController,Events,Nav,NavParams,ModalController,Platform } from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  moreRoot = MorePage;
  mineRoot = MinePage;
  nursingRoot = NursingPage;
  homeRoot = HomePage;

  constructor() {

  }
}
