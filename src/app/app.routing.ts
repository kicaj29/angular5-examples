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
  },
  {
    path: 'lifecycle-and-expression-changed',
    loadChildren: './lifecycle-expressionChangedAfterItHasBeenCheckedError-example/lifecycle-expression-changed-after-it-has-been-checked-error-example.module#LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleModule'
  },
  {
    path: 'testing',
    loadChildren: './testing/testing.module#TestingModule'
  },
  {
    path: 'wizard',
    loadChildren: './wizard/wizard-sample.module#WizardSampleModule'
  }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
