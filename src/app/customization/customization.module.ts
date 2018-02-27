import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizationComponent } from './customization.component';
import { routing } from './customization.routing';
import {
  DynamicContentComponent,
  UnknownDynamicComponent
} from './dynamic-content/dynamic-content.component';
import { FormsModule } from '@angular/forms';
import {
  extensionsTypes
} from './extenstions';
import { AnotherService } from './services/another.service.ts';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  providers: [AnotherService],
  declarations: [CustomizationComponent, CustomerComponent, DynamicContentComponent, UnknownDynamicComponent, ...extensionsTypes],
  entryComponents: [UnknownDynamicComponent, ...extensionsTypes]
})
export class CustomizationModule { }
