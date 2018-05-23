import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiProvidersModulesVsComponentsComponent } from './di-providers-modules-vs-components.component';
import { routing } from './di-providers-modules-vs-components.routing';
import { AModule } from './a/a.module';
import { ABaseService } from './a/a-base.service';
import { AdaptABaseService } from './adapt-a-base.service';

@NgModule({
  providers: [ {provide: ABaseService, useClass: AdaptABaseService }],
  imports: [
    CommonModule,
    routing,
    AModule
  ],
  declarations: [DiProvidersModulesVsComponentsComponent],
})
export class DiProvidersModulesVsComponentsModule {
  constructor() {
    console.log('constructor: DiProvidersModulesVsComponentsModule');
  }
}
