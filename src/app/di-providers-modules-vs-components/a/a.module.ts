import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A1Component } from './a1.component';
import { A11Component } from './a1-1.component';
import { BModule } from './b/b.module';

@NgModule({
  imports: [
    CommonModule,
    BModule
  ],
  declarations: [A1Component, A11Component],
  exports: [A1Component, A11Component]
})
export class AModule {

  constructor() {
    console.log('constructor: AModule');
  }

}
