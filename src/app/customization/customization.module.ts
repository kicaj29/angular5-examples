import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizationComponent } from './customization.component';
import { routing } from './customization.routing';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import {
  DynamicContentComponent,
  DynamicSample1Component,
  DynamicSample2Component,
  UnknownDynamicComponent
} from './dynamic-content/dynamic-content.component';
import { DynamicContentDemoComponent } from './dynamic-content-demo/dynamic-content-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  declarations: [CustomizationComponent, SampleComponentComponent, DynamicContentComponent, DynamicContentDemoComponent,
    DynamicSample1Component, DynamicSample2Component, UnknownDynamicComponent],
  entryComponents: [DynamicSample1Component, DynamicSample2Component, UnknownDynamicComponent]
})
export class CustomizationModule { }
