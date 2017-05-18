/**
 * Created by yechuzheng on 2017/2/28.
 */

import { NgModule } from '@angular/core';

import { homeRouting } from './home.routing';
import { HomeComponent} from  './home.component';
import {AboutComponent} from "./about/about.component";
import {SharedModule} from "../shared/shared.module";
import {IndexComponent} from "./index/index.component";
import {LoginComponent} from "./login/login.component";

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        IndexComponent,
        LoginComponent,
    ],
    imports: [
        SharedModule,
        homeRouting,
    ],
    providers: [

    ],
})
export class HomeModule { }
