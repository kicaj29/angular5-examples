import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './shadow-dom.routing';
import {ShadowDomComponent} from './shadow-dom.component';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ShadowDomComponent, SimpleComponent]
})
export class ShadowDomModule { }
