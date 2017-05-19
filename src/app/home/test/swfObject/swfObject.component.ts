/**
 * Created by yechuzheng on 2017/2/28.
 */

import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Message} from "primeng/components/common/api";
import * as swfObject from 'swfObject';
import {Source} from "../../../shared/models/source";

declare var $: any;
@Component({
    templateUrl: 'swfObject.html',
    styleUrls: ['swfObject.css'],
    providers:[]
})
export class SwfObjectComponent implements OnInit{
    msgs: Message[] = [];
    @ViewChild('videoPlay') videoPlay: any;
    sources:Source[];
    Source:Source = new Source();
    constructor() {}

    ngOnInit() {
        this.sources = [
            {"id":1,"name":"直播01","createTime":"2017-03-26 12:12:22","photo":"http://angular2.axuer.com/resources/images/logos/angular2/angular.svg","path":"http://iot1.hzcwtech.com/hls/demo1004.m3u8","type":1},
            {"id":2,"name":"直播02","createTime":"2017-03-26 12:12:22","photo":"http://angular2.axuer.com/resources/images/logos/angular2/angular.svg","path":"http://stjy.bjqjyj.cn/hls/330108001_187.m3u8","type":1},
            {"id":3,"name":"直播03","createTime":"2017-03-27 12:12:22","photo":"http://angular2.axuer.com/resources/images/logos/angular2/angular.svg","path":"http://stjy.bjqjyj.cn/hls/330108001_186.m3u8","type":1},
        ];
        this.Source = this.sources[0];
        this.onPlayer();
    }
    onClickStream(Source){
        console.info(swfObject.getFlashPlayerVersion());
        this.Source = Source;
        this.onPlayer();
    }

    onPlayer(){
        let swfUrlStr = "/assets/swfObject/StrobeMediaPlayback.swf";
        let replaceElemIdStr = this.videoPlay.nativeElement.id;
        let swfVersionStr = "10.0.0";
        let xiSwfUrlStr = "/assets/swfObject/expressInstall.swf";
        let flashvarsObj = {
            src: this.Source.path,
            autoPlay: "false",
            verbose: "true",
            controlBarAutoHide: "true",
            controlBarPosition: "bottom",
            poster: "/assets/images/dq.png",
            // plugin_hls: "/assets/player/plugin/expressInstall.swf"
            plugin_hls: "/assets/swfObject/HLSDynamicPlugin.swf"
        };
        swfObject.embedSWF(swfUrlStr, replaceElemIdStr, "100%", "100%", swfVersionStr,xiSwfUrlStr,flashvarsObj)
    }
}
