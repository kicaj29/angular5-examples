import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardSampleComponent } from './wizard-sample.component';
import { routing } from './wizard-sample.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [WizardSampleComponent]
})
export class WizardSampleModule { }
