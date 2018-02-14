import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizationComponent } from './customization.component';
import { routing } from './customization.routing';
import {
  DynamicContentComponent,
  UnknownDynamicComponent
} from './dynamic-content/dynamic-content.component';
import { DynamicContentDemoComponent } from './dynamic-content-demo/dynamic-content-demo.component';
import { FormsModule } from '@angular/forms';
import { Extension1Component } from './extension1/extension1.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  declarations: [CustomizationComponent, DynamicContentDemoComponent, DynamicContentComponent, UnknownDynamicComponent, Extension1Component],
  entryComponents: [UnknownDynamicComponent, Extension1Component]
})
export class CustomizationModule { }
