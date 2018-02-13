import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizationComponent } from './customization.component';
import { routing } from './customization.routing';
import { SampleComponentComponent } from './sample-component/sample-component.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [CustomizationComponent, SampleComponentComponent]
})
export class CustomizationModule { }
