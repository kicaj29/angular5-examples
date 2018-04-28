import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DiDecoratorsComponent} from './di-decorators.component';

const routes: Routes = [
  { path: '', component: DiDecoratorsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
