import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingComponent } from './testing.component';

const routes: Routes = [
  { path: '', component: TestingComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
