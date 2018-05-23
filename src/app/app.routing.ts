import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {DiDecoratorsModule} from './di-decorators/di-decorators.module';
import {DiProvidersModulesVsComponentsModule} from './di-providers-modules-vs-components/di-providers-modules-vs-components.module';

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
  },
  {
    path: 'http-client',
    loadChildren: './http-client-example/http-client-example.module#HttpClientExampleModule'
  },
  {
    path: 'customization',
    loadChildren: './customization/customization.module#CustomizationModule'
  },
  {
    path: 'components-interaction',
    loadChildren: './components-interaction/components-interaction.module#ComponentsInteractionModule'
  },
  {
    path: 'shadow-dom',
    loadChildren: './shadow-dom/shadow-dom.module#ShadowDomModule'
  },
  {
    path: 'di-decorators',
    loadChildren: './di-decorators/di-decorators.module#DiDecoratorsModule'
  },
  {
    path: 'di-providers-modules-vs-components',
    loadChildren: './di-providers-modules-vs-components/di-providers-modules-vs-components.module#DiProvidersModulesVsComponentsModule'
  }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
