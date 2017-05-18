/**
 * Created by yechuzheng on 2017/2/28.
 */


import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { VideoGular2Component } from './videogular2/videogular2.component';

const testRoutes: Routes = [
    {
        path: '',
        component: TestComponent,
        children: [
            { path: 'videogular2',component: VideoGular2Component },
        ]
    }
];

export const testRouting: ModuleWithProviders = RouterModule.forChild(testRoutes);