/**
 * Created by yechuzheng on 2017/2/28.
 */

import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Message} from "primeng/components/common/api";
import * as swfObject from 'swfObject';

declare var $: any;
@Component({
    templateUrl: 'swfObject.html',
    styleUrls: ['swfObject.css'],
    providers:[]
})
export class SwfObjectComponent implements OnInit{
    msgs: Message[] = [];
    @ViewChild('videoPlay') videoPlay: any;
    constructor() {}

    ngOnInit() {
        this.onPlayer();
    }

    onPlayer(){
        let swfUrlStr = "/assets/swfObject/StrobeMediaPlayback.swf";
        let replaceElemIdStr = this.videoPlay.nativeElement.id;
        let swfVersionStr = "10.0.0";
        let xiSwfUrlStr = "/assets/swfObject/expressInstall.swf";
        let flashvarsObj = {
            src: "http://stjy.bjqjyj.cn/hls/330108001_187.m3u8",
            autoPlay: "false",
            verbose: "true",
            controlBarAutoHide: "true",
            controlBarPosition: "bottom",
            poster: "/assets/images/dq.jpg",
            // plugin_hls: "/assets/player/plugin/expressInstall.swf"
            plugin_hls: "/assets/swfObject/HLSDynamicPlugin.swf"
        };
        swfObject.embedSWF(swfUrlStr, replaceElemIdStr, "100%", "100%", swfVersionStr,xiSwfUrlStr,flashvarsObj)
    }
}
