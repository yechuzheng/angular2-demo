/**
 * Created by yechuzheng on 2017/2/28.
 */

import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Message} from "primeng/components/common/api";
@Component({
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css'],
    providers:[]
})
export class AboutComponent implements OnInit{
    msgs: Message[] = [];

    constructor() {}



    ngOnInit() {

    }
}