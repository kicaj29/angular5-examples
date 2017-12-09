import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleComponent } from './lifecycle-expression-changed-after-it-has-been-checked-error-example.component';
import { routing } from './lifecycle-expressionChangedAfterItHasBeenCheckedError-example.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleComponent]
})
export class LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleModule { }
