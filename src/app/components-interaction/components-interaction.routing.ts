import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsInteractionComponent } from './components-interaction.component';

const routes: Routes = [
  { path: '', component: ComponentsInteractionComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
