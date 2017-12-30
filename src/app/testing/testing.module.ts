import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing.component';
import { routing } from './testing.routing';
import { BannerInlineComponent } from './test-a-component/banner-inline.component';
import { MySimpleControlComponent } from './test-a-control-value-accessor/my-simple-control.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TestingComponent, BannerInlineComponent, MySimpleControlComponent]
})
export class TestingModule { }
