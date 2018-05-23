import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DiProvidersModulesVsComponentsComponent} from './di-providers-modules-vs-components.component';

const routes: Routes = [
  { path: '', component: DiProvidersModulesVsComponentsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
