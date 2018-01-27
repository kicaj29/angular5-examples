import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientExampleComponent } from './http-client-example.component';

const routes: Routes = [
  { path: '', component: HttpClientExampleComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
