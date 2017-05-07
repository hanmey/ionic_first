import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { KnowledgeService} from "../home/KnowledgeService"; //知识库服务
import { HomePage} from "../home/home";
@Component({
  selector: 'page-cat',
  templateUrl: 'cat.html'
})
export class CatPage {
  private category_list = [];
  constructor(public navCtrl: NavController,private KnowledgeService: KnowledgeService, storage: Storage) {
        storage.ready().then(() => {
            storage.get('category_list').then((val) => {
                if(val == null){
                   this.getKnSortsList();
                   setTimeout(function(){
                   storage.set('category_list',this.category_list);},1000);
                }
             });
        });
  }
  getKnSortsList() {
        let Params = {};
        this.KnowledgeService.getSortsList(Params).subscribe(res => {
          if (res.status == 200) {
             var data = res.json();
             this.category_list = data.data;
          }
        });
  }
  getSortLevel(fdn){
     let index = fdn.split('.');
     return index.length;
  }
    pushKnList(item){
        this.navCtrl.push(HomePage,{item:item});
    }
}
