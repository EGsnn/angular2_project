/**
 * Created by Administrator on 2017/3/24.
 */
import { Component ,ViewChild , AfterViewInit , OnInit} from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';


@Component({
    selector: 'indexContent',
    templateUrl: 'app/indexContent/indexContent.component.html',
    styleUrls: ['app/indexContent/indexContent.component.css']
})


export class IndexContentComponent implements AfterViewInit {

    // this is how you get access to the child component
    @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

    example1SwipeOptions: any;
    //example1SwipeOptions 与html页面中的 option neme 一致
    constructor() {
        this.example1SwipeOptions = {
            slidesPerView: 1,
            //同时显示
            loop: true,
            speed:500,
            autoplay:5000,
            spaceBetween: 1
        };
    }

    moveNext() {
        this.swiperContainer.swiper.slideNext();
    }

    movePrev() {
        this.swiperContainer.swiper.slidePrev();
    }

    ngAfterViewInit() {
        console.log(this.swiperContainer);
    }

}

