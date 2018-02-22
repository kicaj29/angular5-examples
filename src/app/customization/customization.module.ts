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
import {
  extensionsTypes
} from './extenstions';
import { AnotherService } from './services/another.service.ts';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  providers: [AnotherService],
  declarations: [CustomizationComponent, DynamicContentDemoComponent, DynamicContentComponent, UnknownDynamicComponent, ...extensionsTypes],
  entryComponents: [UnknownDynamicComponent, ...extensionsTypes]
})
export class CustomizationModule { }
