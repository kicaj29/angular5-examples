import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleComponent } from './lifecycle-expression-changed-after-it-has-been-checked-error-example.component';

const routes: Routes = [
  { path: '', component: LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
