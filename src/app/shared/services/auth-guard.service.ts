/**
 * Created by yechuzheng on 2017/2/28.
 */

import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let userToken = localStorage.getItem('currentUser');
        if (!userToken) {
            console.info(route.url[0].path+" 需要登录");
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }

        let ObjToken = JSON.parse(userToken);//将json字符串转为对象
        let date = new Date();

        let deadline = ObjToken.deadline;//过期时间戳
        let currentTime = date.getTime();//当前时间戳
        if(currentTime > deadline){
            console.info(route.url[0].path+" 需要登录,登录信息已过期");
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }

        //重新设置登录信息1小时过期时间
        localStorage.setItem('currentUser', JSON.stringify({token: ObjToken.token ,deadline:date.setHours(date.getHours()+1)}));
        console.info("已登录，可以访问 "+route.url[0].path);
        return true;
    }

}