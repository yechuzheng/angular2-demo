/**
 * Created by yechuzheng on 2017/2/28.
 */

import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Message} from "primeng/components/common/api";
import {VgAPI} from "videogular2/core";
import {Subscription} from "rxjs/Subscription";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Source} from "../../../shared/models/source";
@Component({
    templateUrl: 'videogular2.html',
    styleUrls: ['videogular2.css'],
    providers:[]
})
export class VideoGular2Component implements OnInit{
    msgs: Message[] = [];

    sources:Source[];
    Source:Source = new Source();
    api: VgAPI;

    constructor() {}



    ngOnInit() {
        this.sources = [
            {"id":1,"name":"直播01","createTime":"2017-03-26 12:12:22","photo":"http://angular2.axuer.com/resources/images/logos/angular2/angular.svg","path":"http://iot1.hzcwtech.com/hls/demo1004.m3u8","type":1},
            {"id":2,"name":"直播02","createTime":"2017-03-26 12:12:22","photo":"http://angular2.axuer.com/resources/images/logos/angular2/angular.svg","path":"http://stjy.bjqjyj.cn/hls/330108001_187.m3u8","type":1},
            {"id":3,"name":"直播03","createTime":"2017-03-27 12:12:22","photo":"http://angular2.axuer.com/resources/images/logos/angular2/angular.svg","path":"http://stjy.bjqjyj.cn/hls/330108001_186.m3u8","type":1},
        ];
        this.Source = this.sources[0];


    }


    onPlayerReady(api:VgAPI) {
        this.api = api;
    }

    onClickStream(source:Source) {
        this.api.pause();

        let timer:Subscription = TimerObservable.create(0, 10).subscribe(
            () => {
                this.Source = source;
                timer.unsubscribe();
            }
        );
    }

    onCapture(){
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: '警告', detail: "截图功能暂不支持."});
    }
}