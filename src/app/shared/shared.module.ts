import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {GrowlModule} from "primeng/components/growl/growl";
import {LocalStorage} from "./services/local.storage";
import {NavbarComponent} from "./home-navbar/home-navbar.component";
import {RouterModule} from "@angular/router";
import {KSSwiperModule} from "angular2-swiper";
import {LightboxModule,CalendarModule} from 'primeng/primeng';




@NgModule({
  imports: [
      RouterModule,
      CommonModule,

  ],
  declarations: [
      NavbarComponent,
  ],
  providers: [
      LocalStorage
  ],
  exports: [
      KSSwiperModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      JsonpModule,
      GrowlModule,
      NavbarComponent,
      LightboxModule,
      CalendarModule,

  ]
})

export class SharedModule {

}
