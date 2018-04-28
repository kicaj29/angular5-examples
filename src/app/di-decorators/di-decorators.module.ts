import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './di-decorators.routing';
import { DiDecoratorsComponent } from './di-decorators.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DiDecoratorsComponent]
})
export class DiDecoratorsModule { }
