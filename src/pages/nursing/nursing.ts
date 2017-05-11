import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { Camera, CameraOptions } from '@ionic-native/camera';
@Component({
  selector: 'page-nursing',
  templateUrl: 'nursing.html'
})
export class NursingPage {
  slideOneForm: FormGroup;
  submitAttempt: boolean = false;
  //设置默认图片的路径
  profilePicture: any = "assets/img/live.jpg";
  name: any;
  password: any;
  public path;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private transfer: Transfer,
    private file: File,
    private fileChooser: FileChooser,
    private camera: Camera) {
    this.slideOneForm = formBuilder.group({
      name: ['Nancy', Validators.compose([Validators.maxLength(30), Validators.minLength(2), Validators.required, Validators.pattern('[a-zA-Z0-9]*')])],
      password: ['', Validators.compose([Validators.maxLength(18), Validators.minLength(6), Validators.required, Validators.pattern('[a-zA-Z0-9]*')])],
      gender: ['', Validators.compose([Validators.required])]
    }, function (g: FormGroup) {
      console.log('dsfsdfsdfsd');
      console.log('callback');
      return false;
    }); console.log(camera);
    this.name = this.slideOneForm.controls['name'];
    this.password = this.slideOneForm.controls['password'];
  }
  submitData() {
    console.log(this.formBuilder.control(this.slideOneForm.value));
    return false;
  }
  validForm() {

  }
  openCamera() {
    this.fileChooser.open()
      .then(uri => console.log(uri))
      .catch(e => console.log(e));
  }
  takePhoto() {
    var options = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, camera or photo gallery

      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.CAMERA,//拍照时，此参数必须有，否则拍照之后报错，照片不能保存

      correctOrientation: true  //Corrects Android orientation quirks
    }/**
     * imageData就是照片的路径，关于这个imageData还有一些细微的用法，可以参考官方的文档。
     */
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = imageData;
      this.path = base64Image;//给全局的文件路径赋值。
      this.profilePicture = base64Image;//给image设置source。
      alert(this.path);

      /*  this.zone.run(() => this.image = base64Image);*/
    }, (err) => {
      // Handle error，出错后，在此打印出错的信息。
      alert(err.toString());
    });
  }
  choosePhoto() {


    var options = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, camera or photo gallery
      sourceType: 0,//0对应的值为PHOTOLIBRARY ，即打开相册
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true  //Corrects Android orientation quirks
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = imageData;
      this.path = base64Image;
      this.profilePicture = base64Image;
      alert(base64Image);
    }, (err) => {
      // Handle error
    });

  }
  chooseVideo() {
    var options = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, camera or photo gallery
      sourceType: 0,
      mediaType: 1,//为1时允许选择视频文件
      allowEdit: true,
      correctOrientation: true  //Corrects Android orientation quirks
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = imageData;
      this.path = base64Image;
      this.profilePicture = "assets/img/video.png";//选择视频后，image另外显示一张图片，目前还无法获取视频的第一帧图片。
      alert(this.path);
    }, (err) => {
      // Handle error
    });

  }
}