import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic-content/dynamic-component';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-extension2',
  templateUrl: './extension2.component.html'
})
export class Extension2Component extends DynamicComponent<CustomerComponent> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
