import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleComponent } from './lifecycle-expression-changed-after-it-has-been-checked-error-example.component';
import { routing } from './lifecycle-expressionChangedAfterItHasBeenCheckedError-example.routing';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleComponent, AComponent, BComponent]
})
export class LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleModule { }
