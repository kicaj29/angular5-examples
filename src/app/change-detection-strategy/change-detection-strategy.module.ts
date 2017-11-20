import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy.component';
import { routing } from './change-detection-strategy.routing';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ChangeDetectionStrategyComponent, ChildComponent]
})
export class ChangeDetectionStrategyModule { }
