import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './components-interaction.routing';
import { ComponentsInteractionComponent } from './components-interaction.component';
import { Comp1Component } from './interaction-via-binding/comp1/comp1.component';
import { Comp2Component } from './interaction-via-binding/comp2/comp2.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ComponentsInteractionComponent, Comp1Component, Comp2Component]
})
export class ComponentsInteractionModule { }
