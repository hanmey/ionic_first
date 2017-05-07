/**
 * 提示服务
 * 包含Loading
 * 包含Tost
 */
import {Injectable} from '@angular/core';
import { LoadingController,ToastController,AlertController} from 'ionic-angular';

@Injectable()
export class PromptService {


  private loading:any;
  constructor(
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        public alertCtrl:AlertController 
  ) {

  }

 /**
   * 消息提示Toast
   * @param msg 提示消息内容
   */
    presentToast(msg,position="bottom",duration=3000,) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: duration,
            position:position
        });
        toast.present();
    }

    /**
     * 进度提示
     * @param msg 提示消息内容
     */
    loadingCreate(msg)
    {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
    }

    loadingPresent()
    {
        this.loading.present();
    }

    loadingDismiss()
    {
        this.loading.dismiss();
    }
}