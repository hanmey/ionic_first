import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Injectable()
export class StorageService {
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_WELCOME = 'hasWelcome';
  authHeaders:any=[];
  token:any="";
  pushid:any="";
  userid:any="";
  constructor(public events: Events, public storage: Storage) {}
  // login(username,token,userid) {
  //   this.storage.set(this.HAS_LOGGED_IN, true);
  //   this.setUsername(username);
  //   this.setToken(token);
  //   this.setUserId(userid);
  //   this.events.publish('user:login');
  //   //console.log(this.events.publish('user:login'));
  // }

  // logout() {
  //   this.storage.remove(this.HAS_LOGGED_IN);
  //   this.storage.remove('username');
  //   this.storage.remove('token');
  //   this.storage.remove('userid');
  //   this.events.publish('user:logout');
  // }

  // setUsername(username) {
  //   this.storage.set('username', username);
  // }

  // getUsername() {
  //   return this.storage.get('username').then((value) => {
  //     return value;
  //   });
  // }


  // /**
  //  * 登录验证认证信息
  //  * @param token 令牌
  //  */
  // setToken(token) {
  //   this.storage.set('token', token);
  // }

  // getToken() {
  //   return this.storage.get('token').then((value) => {
  //     console.log("getToken"+value);
  //       return value;
  //   });
  // }

  // /**
  //  * 
  //  * @param pushid 极光推送的regID
  //  */
  // setPushId(pushid) {
  //   this.storage.set('pushid', pushid);
  // }

  // getPushId() {
  //   return this.storage.get('pushid').then((value) => {
  //     return value;
  //   });
  // }


  // setUserId(userid) {
  //   this.storage.set('userid', userid);
  // }

  // getUserId() {
    
  //    return this.storage.get('userid').then((value) => {
  //       return value;
  //   });

  // }


  // // return a promise
  // hasLoggedIn() {
  //   return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
  //     return value === true;
  //   });
  // }
  // authHeadersInit()
  // {
  //   this.authHeaders=[];
  //     this.storage.ready().then(() => {
  //         this.storage.get('token').then((value) => {
  //           this.token=value;
  //           this.authHeaders.push({'token':this.token});
  //        });
  //         this.storage.get('pushid').then((value) => {
  //           this.pushid=value;
  //           this.authHeaders.push({'pushid':this.pushid});
  //        });
  //         this.storage.get('userid').then((value) => {
  //           this.userid=value;
  //           this.authHeaders.push({'userid':this.userid});
  //         });
  //   });

  //   return this.authHeaders;
  // }

}