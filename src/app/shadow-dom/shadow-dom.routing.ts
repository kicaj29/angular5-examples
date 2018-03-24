import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShadowDomComponent} from './shadow-dom.component';

const routes: Routes = [
  { path: '', component: ShadowDomComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
