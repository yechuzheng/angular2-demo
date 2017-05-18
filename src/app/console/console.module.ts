/**
 * Created by yechuzheng on 2017/2/28.
 */

import { NgModule } from '@angular/core';

import { consoleRouting } from './console.routing';
import { ConsoleComponent} from  './console.component';
import { UserComponent} from  './user/user.component';
import {SharedModule} from "../shared/shared.module";
@NgModule({
    declarations: [
        ConsoleComponent,
        UserComponent
    ],
    imports: [
        SharedModule,
        consoleRouting,
    ],
    providers: [],
})
export class ConsoleModule { }
