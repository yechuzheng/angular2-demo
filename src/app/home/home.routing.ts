/**
 * Created by yechuzheng on 2017/2/28.
 */


import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '',pathMatch: 'full', component: IndexComponent },
            { path: 'about', component: AboutComponent },
            { path: 'login', component: LoginComponent },
            { path: 'test', loadChildren: 'app/home/test/test.module#TestModule'},
        ]
    }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);