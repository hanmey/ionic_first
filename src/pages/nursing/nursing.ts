import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-nursing',
  templateUrl: 'nursing.html'
})
export class NursingPage {
  slideOneForm: FormGroup;
  submitAttempt: boolean = false;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {
      this.slideOneForm = formBuilder.group({
        name: ['Nancy',Validators.compose([Validators.maxLength(30),Validators.minLength(2),Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        password: ['',Validators.compose([Validators.maxLength(18), Validators.minLength(6),Validators.required, Validators.pattern('[a-zA-Z ]*')])]
      },function(g:FormGroup){
            console.log('dsfsdfsdfsd');
            console.log('callback');
            return false;
      });
      formBuilder.control(this.slideOneForm);
  }
  submitData(){
      console.log(this.formBuilder.control(this.slideOneForm.value));
    return false;
  }
  validForm(){

  }

}
