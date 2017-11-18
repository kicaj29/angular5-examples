import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy.component';
import { routing } from './change-detection-strategy.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ChangeDetectionStrategyComponent]
})
export class ChangeDetectionStrategyModule { }
