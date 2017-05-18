/**
 * Created by yechuzheng on 2017/2/28.
 */


import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { VideoGular2Component } from './videogular2/videogular2.component';
import { SwfObjectComponent } from './swfObject/swfObject.component';

const testRoutes: Routes = [
    {
        path: '',
        component: TestComponent,
        children: [
            { path: 'videogular2',component: VideoGular2Component },
            { path: 'swfObject',component: SwfObjectComponent },
        ]
    }
];

export const testRouting: ModuleWithProviders = RouterModule.forChild(testRoutes);