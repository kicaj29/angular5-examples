import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './customization.routing';
import { FormsModule } from '@angular/forms';
import { CustomersModule } from './customers/customers.module';
import { CustomizationComponent } from './customization.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    CustomersModule
  ],
  providers: [ ],
  declarations: [CustomizationComponent],
  entryComponents: []
})
export class CustomizationModule { }
