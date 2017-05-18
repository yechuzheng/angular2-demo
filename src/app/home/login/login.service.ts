/**
 * Created by yechuzheng on 2017/2/8.
 */

import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions } from "@angular/http";
import { Observable }     from 'rxjs/Observable';

import {InterceptorService} from "ng2-interceptors";

@Injectable()
export class LoginService {
    private getOptions(){
        let header = new Headers({ 'Content-Type': 'application/json'});
        return new RequestOptions({ headers: header });
    }

    constructor(private http: InterceptorService) {}

    login(user) : Observable <any> {
        return this.http.post('/api/login', JSON.stringify({ userName: user.username, passWord: user.password }),this.getOptions())
            .map((response: Response) => {
                let token = response.json() && response.json().data;
                let date = new Date();//获取当前时间
                let deadline = date.setHours(date.getHours()+1);//设置时间加1小时
                if (token) {
                    localStorage.setItem('currentUser', JSON.stringify({token: token ,deadline:deadline}));
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.error);
    }

    logout() {
        // remove user from local storage to log user out
        return localStorage.removeItem('currentUser');
    }

    /**
     * 返回错误信息
     * @param error
     * @returns {any}
     */
    private error (error: Response | any) {

        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {

            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return Observable.throw(error.json());
    }


}