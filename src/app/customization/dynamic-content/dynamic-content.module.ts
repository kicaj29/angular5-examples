import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DynamicContentComponent,
  UnknownDynamicComponent
} from './dynamic-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ DynamicContentComponent, UnknownDynamicComponent ],
  entryComponents: [ UnknownDynamicComponent ],
  exports: [ DynamicContentComponent ]
})
export class DynamicContentModule { }
