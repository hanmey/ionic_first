import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import {HttpService} from "../../providers/HttpService";
// import { StorageService } from '../../providers/StorageService';
import {AppConfig} from '../../app/app.config';
// import { Storage } from '@ionic/storage';
/**
 *知识库
 */
@Injectable()
export class KnowledgeService {
  token: any;
  pushid: any;
  userid: any;
  authHeaders: any;

  constructor(public httpService: HttpService) {
    // this.authHeaders=[];
    // this.storage.ready().then(() => {
    //       this.storage.get('token').then((value) => {
    //         this.token=value;
    //         this.authHeaders.push({'token':this.token});
    //         console.log(this.token);
    //       });
    //       this.storage.get('pushid').then((value) => {
    //         this.pushid=value;
    //         this.authHeaders.push({'pushid':this.pushid});
    //         console.log(this.pushid);
    //       });
    //       this.storage.get('userid').then((value) => {
    //         this.userid=value;
    //         this.authHeaders.push({'userid':this.userid});
    //         console.log(this.userid);
    //       });
    // });
  }


  /**
   * 获取知识库列表
   * @param Params 分类 关键字
   * app/workorder/orderlist
   */
  getList(Params) {
    return this.httpService.get('http://hls.liangpeng.net:8086/zhishikus', Params);
  }
  //获取知识库分类
  getSortsList(Params){
    return this.httpService.get('http://hls.liangpeng.net:8086/zhishikuSorts',Params);
  }
}
