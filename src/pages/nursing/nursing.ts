import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-nursing',
  templateUrl: 'nursing.html'
})
export class NursingPage {
  @ViewChild('signupSlider') signupSlider: any;
  slideOneForm: FormGroup;
  submitAttempt: boolean = false;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {
      this.slideOneForm = formBuilder.group({
        name: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        password: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
      });

  }
  SubmitData(){
    console.log(this.slideOneForm.value);
  }

}
