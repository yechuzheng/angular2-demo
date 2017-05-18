/**
 * Created by yechuzheng on 2017/2/28.
 */

import { NgModule } from '@angular/core';

import { testRouting } from './test.routing';
import { TestComponent } from  './test.component';
import {SharedModule} from "../../shared/shared.module";
import {VideoGular2Component} from "./videogular2/videogular2.component";
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgStreamingModule } from 'videogular2/streaming';
import { VgImaAdsModule } from 'videogular2/ima-ads';
import {SwfObjectComponent} from "./swfObject/swfObject.component";
@NgModule({
    declarations: [
        TestComponent,
        VideoGular2Component,
        SwfObjectComponent
    ],
    imports: [
        SharedModule,
        testRouting,
        VgCoreModule,
        VgControlsModule,
        VgBufferingModule,
        VgOverlayPlayModule,
        VgStreamingModule,
        VgImaAdsModule,
    ],
    providers: [],
})
export class TestModule { }
