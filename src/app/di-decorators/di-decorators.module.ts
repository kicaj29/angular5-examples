import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './di-decorators.routing';
import { DiDecoratorsComponent } from './di-decorators.component';
import { Comp1Component } from './comp1/comp1.component';
import { StoreDiService } from './store-di.service';
import { StoreBaseService } from './comp1/store-base.service';
import { StoreDiModuleService } from './store-di-module.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DiDecoratorsComponent, Comp1Component],
  providers: [
    // { provide: StoreBaseService, useClass: StoreDiModuleService }
    ]
})
export class DiDecoratorsModule { }
