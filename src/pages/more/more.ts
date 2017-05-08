import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { Slides } from 'ionic-angular';
@Component({
    selector: 'page-more',
    templateUrl: 'more.html'
})
export class MorePage {
    @ViewChild(Slides) slides: Slides;
    public slidesList =[
        {title:'第一藏独',image:'http://f12.baidu.com/it/u=218023967,2981160963&fm=76'},
        {title:'第二张图',image:'http://f12.baidu.com/it/u=501933761,3688807382&fm=76'}];

    constructor(public navCtrl: NavController) {

    }
    goToSlide() {
        console.log(this.slides);
        this.slides.slideTo(2, 500);
    }

}

