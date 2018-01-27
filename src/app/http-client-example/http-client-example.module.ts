import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientExampleComponent } from './http-client-example.component';
import { routing } from './http-client-example.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [HttpClientExampleComponent]
})
export class HttpClientExampleModule { }
