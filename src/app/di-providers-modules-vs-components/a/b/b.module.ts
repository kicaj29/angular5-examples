import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B1Component } from './b1.component';
import { ABaseService } from '../a-base.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [B1Component],
  exports: [B1Component],
  providers: [ABaseService]
})
export class BModule {
  constructor() {
    console.log('constructor: BModule');
  }
}
