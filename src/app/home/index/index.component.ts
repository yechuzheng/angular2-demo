/**
 * Created by yechuzheng on 2017/2/28.
 */

import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';

import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css'],
    providers:[]
})
export class IndexComponent implements OnInit {
    @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;
    example1SwipeOptions: any;
    slide: any;
    constructor() {}
    ngOnInit() {
        this.example1SwipeOptions = {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            // spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        };

        this.slide = [
            {"h1":"My home page","h2":"啦啦啦.","class":"jumbotron-bg1"},
            {"h1":"My home page","h2":"啦啦啦..","class":"jumbotron-bg2"},
            {"h1":"My home page","h2":"啦啦啦...","class":"jumbotron-bg3"},
            {"h1":"My home page","h2":"啦啦啦....","class":"jumbotron-bg4"},
            {"h1":"My home page","h2":"啦啦啦.....","class":"jumbotron-bg5"},
        ];

        // console.log(this.swiperContainer);

    }
}