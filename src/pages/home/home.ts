import {Component} from '@angular/core';

import {App, NavController, NavParams, AlertController, Events, ModalController} from 'ionic-angular';
// import { Storage } from '@ionic/storage';

import {KnowledgeService} from "./KnowledgeService"; //知识库服务

import { PromptService} from "../../providers/PromptService"; //消息提示服务

import { CatPage } from '../cat/cat';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    private isRefresh = false;
    private knlist = [];
    private category_list = [];
    private cate = {id:0, name:'分类', fdn:''};
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private app: App,
                public alertCtrl: AlertController,
                public modalCtrl: ModalController,
                private events: Events,
                private promptService: PromptService,
                private KnowledgeService: KnowledgeService
                // private CatPage:CatPage
    ) {
        this.getKnList(this.isRefresh);
        this.getKnSortsList();
        if(navParams.data.item){
            this.cate = navParams.data.item;
        }

    }

    onSearch(searchWord) {
        this.getKnList({title_like: '%' + searchWord + "%", content_like: "%" + searchWord + "%"});
    }

    pushCategory() {
      this.navCtrl.push(CatPage);
    }

    getKnList(where) {
        let Params = {};
        this.promptService.loadingCreate("加载中...");
        this.promptService.loadingPresent();
        setTimeout(() => {
            //  this.getOrderList(this.isRefresh);
            this.KnowledgeService.getList(where).subscribe(res => {
                if (res.status == 200) {
                    var data = res.json();
                    this.knlist = data.data;
                }
                this.promptService.loadingDismiss();
            });
        }, 1000);
    }

    getKnSortsList() {
        let Params = {parent_id: 0};
        this.KnowledgeService.getSortsList(Params).subscribe(res => {
            if (res.status == 200) {
                var data = res.json();
                this.category_list = data.data;
            }
            this.promptService.loadingDismiss();
        });
    }
}
