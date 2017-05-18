/**
 * Created by yechuzheng on 2017/2/28.
 */

import { Component } from '@angular/core';

@Component({
    template: `
    <div class="jumbotron text-center">
      <h1>404 Not Found</h1>
      <p>You may be lost. Follow the breadcrumbs back <a routerLink="/">home</a>.</p>
    </div>
  `,
    styles:[`.jumbotron{background-color:#ffffff;}`]
})
export class NotFoundComponent {}