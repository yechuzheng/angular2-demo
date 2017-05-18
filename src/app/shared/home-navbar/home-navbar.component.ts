/**
 * Created by yechuzheng on 2017/2/28.
 */

import {Component, EventEmitter, Output, OnInit,Input} from '@angular/core';

@Component({
    selector: 'home-navbar',
    templateUrl: './home-navbar.component.html',
    styleUrls: ['./home-navbar.component.css'],
    host: {'(window:scroll)': 'track($event)'},
    providers:[],
})

export class NavbarComponent implements OnInit{
    @Input() navbarExpand:boolean = false;
    shrinkCssClass:boolean = false;
    userAuth:any;
    constructor(){
    }
    ngOnInit() {
        this.userAuth = localStorage.getItem("currentUser");
    }

    track($event) {
        let top = document.body.scrollTop;
        if(this.navbarExpand){
            this.onScrolled(top);
        }
    }

    onScrolled(yPos : number) {
        this.shrinkCssClass = yPos > 60 ? true : false;
    }
}