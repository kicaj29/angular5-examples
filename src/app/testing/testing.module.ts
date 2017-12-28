import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing.component';
import { routing } from './testing.routing';
import { BannerInlineComponent } from './test-a-component/banner-inline.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TestingComponent, BannerInlineComponent]
})
export class TestingModule { }
