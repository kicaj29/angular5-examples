import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing.component';
import { routing } from './testing.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TestingComponent]
})
export class TestingModule { }
