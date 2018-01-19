import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing.component';
import { routing } from './testing.routing';
import { BannerInlineComponent } from './test-a-component/banner-inline.component';
import { MySimpleControlComponent } from './test-a-control-value-accessor/my-simple-control.component';
import { BannerComponent } from './test-a-component-external-template/banner.component';
import { TwainComponent } from './test-a-component-with-async-dependency/twain.component';
import { CompDebounceTimeComponent } from './test-a-component-with-debounceTime/comp-debounce-time.component';
import { WelcomeComponent } from './test-a-component-with-dependency/welcome.component';
import { DashboardHeroComponent } from './test-a-component-with-inputs-and-outputs/dashboard-hero.component';
import { CompParentComponent } from './test-a-component-with-ngmodel/comp-parent.component';
import { MySimpleControl2Component } from './test-a-control-value-accessor/my-simple-control2/my-simple-control2.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [TestingComponent, BannerInlineComponent, MySimpleControlComponent, BannerComponent, TwainComponent, CompDebounceTimeComponent, WelcomeComponent, DashboardHeroComponent,
  CompParentComponent, MySimpleControl2Component]
})
export class TestingModule { }
