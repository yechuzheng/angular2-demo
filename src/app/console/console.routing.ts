/**
 * Created by yechuzheng on 2017/2/28.
 */


import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsoleComponent } from './console.component';
import { UserComponent } from './user/user.component';
import {AuthGuardService} from "../shared/services/auth-guard.service";

const consoleRoutes: Routes = [
    {
        path: '',
        component: ConsoleComponent,
        children: [
            { path: 'user',canActivate: [AuthGuardService],component: UserComponent },
        ]
    }
];

export const consoleRouting: ModuleWithProviders = RouterModule.forChild(consoleRoutes);