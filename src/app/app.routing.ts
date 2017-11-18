import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export let appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'change-detection-strategy'
  },
  {
    path: 'change-detection-strategy',
    loadChildren: './change-detection-strategy/change-detection-strategy.module#ChangeDetectionStrategyModule'
  }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
