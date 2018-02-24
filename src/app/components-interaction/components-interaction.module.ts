import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './components-interaction.routing';
import { ComponentsInteractionComponent } from './components-interaction.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ComponentsInteractionComponent]
})
export class ComponentsInteractionModule { }
