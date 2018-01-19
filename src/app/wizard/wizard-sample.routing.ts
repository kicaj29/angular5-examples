import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardSampleComponent } from './wizard-sample.component';

const routes: Routes = [
  { path: '', component: WizardSampleComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
