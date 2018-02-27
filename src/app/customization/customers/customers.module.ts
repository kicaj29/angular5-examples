import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import {
  EXT_LEVEL1_COMPONENTS,
  EXT_LEVEL1_SERVICES
} from './customer/extensions/ext-level1';
import {
  EXT_LEVEL2_COMPONENTS,
  EXT_LEVEL2_SERVICES
} from './customer/extensions/ext-level2';
import {
  EXT_LEVEL3_COMPONENTS,
  EXT_LEVEL3_SERVICES
} from './customer/extensions/ext-level3';
import { FormsModule } from "@angular/forms";
import { DynamicContentModule } from '../dynamic-content/dynamic-content.module';
import { CustomerWriteBaseService } from './customer/customer-write-base.service';
import { CustomerWriteService } from './customer/customer-write.service.ts';
import { CustomerRestApiRegistryService } from './customer-rest-api-registry.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DynamicContentModule
  ],
  declarations: [ CustomerComponent, ...EXT_LEVEL1_COMPONENTS, ...EXT_LEVEL2_COMPONENTS, ...EXT_LEVEL3_COMPONENTS ],
  entryComponents: [ ...EXT_LEVEL1_COMPONENTS, ...EXT_LEVEL2_COMPONENTS, ...EXT_LEVEL3_COMPONENTS ],
  exports: [ CustomerComponent ],
  providers: [
    CustomerRestApiRegistryService,
    { provide: CustomerWriteBaseService, useClass: CustomerWriteService },
    ...EXT_LEVEL1_SERVICES, ...EXT_LEVEL2_SERVICES, ...EXT_LEVEL3_SERVICES
  ]
})
export class CustomersModule { }
