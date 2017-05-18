/**
 * Created by yechuzheng on 2017/2/28.
 */


import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuardService} from "./shared/services/auth-guard.service";

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule',
    },
    {
        path: 'console',
        canActivate: [AuthGuardService],
        loadChildren: 'app/console/console.module#ConsoleModule'
    },
    { path: '**', component: NotFoundComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });