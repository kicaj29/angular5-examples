import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardSampleComponent } from './wizard-sample.component';
import { routing } from './wizard-sample.routing';
import { WizardControlComponent } from './wizard-control/wizard-control.component';
import { WizardStepComponent } from './wizard-control/wizard-step/wizard-step.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [WizardSampleComponent, WizardControlComponent, WizardStepComponent]
})
export class WizardSampleModule { }
