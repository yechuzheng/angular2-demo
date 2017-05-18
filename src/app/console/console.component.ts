/**
 * Created by yechuzheng on 2017/2/28.
 */

import { Component,OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
    templateUrl: './console.component.html',
    styleUrls: ['./console.component.css'],
    providers:[]
})
export class ConsoleComponent implements OnInit{

    constructor(
        private router: Router,
    ) { }

    ngOnInit() {

    }
}
