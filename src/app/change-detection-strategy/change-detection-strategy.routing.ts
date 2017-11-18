import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy.component';

const routes: Routes = [
  { path: '', component: ChangeDetectionStrategyComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
