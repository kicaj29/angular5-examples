import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../../../../dynamic-content/dynamic-component';
import { CustomerComponent } from '../../customer.component';

@Component({
  selector: 'ext-level1-greeting',
  templateUrl: './ext-level1-greeting.component.html'
})
export class ExtLevel1GreetingComponent extends DynamicComponent<CustomerComponent> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.context.viewModel['greeting'] = 'Welcome!!!'
  }

}
