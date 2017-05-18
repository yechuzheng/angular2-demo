import {Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {LoginService} from "./login.service";
import {LocalStorage} from "../../shared/services/local.storage";
import {Message} from "primeng/primeng";
import {User} from "./user";


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers:[LoginService]
})
export class LoginComponent implements OnInit {
    user: User = new User();
    returnUrl: string;
    msgs: Message[] = [];


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
        private ls:LocalStorage
    ) { }

    ngOnInit() {
        let cache = this.ls.getObject("login_cache");
        if(cache.rem){
            this.user = this.ls.getObject("login_cache") ;
        }
        // reset login status
        this.loginService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        if(this.user.rem == false){
            this.ls.remove("login_cache");
        }else {
            this.ls.setObject("login_cache",this.user);
        }

        this.loginService.login(this.user).subscribe(//this.user.username
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.msgs = [];
                this.msgs.push({severity: 'error', summary: '警告', detail: error.errmsg});
                console.error(error)
            });
    }
}
