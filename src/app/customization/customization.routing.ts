import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomizationComponent } from './customization.component';

const routes: Routes = [
  { path: '', component: CustomizationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
