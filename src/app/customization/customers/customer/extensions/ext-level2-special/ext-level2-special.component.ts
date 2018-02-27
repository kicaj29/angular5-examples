import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from '../../customer.component';
import { DynamicComponent } from '../../../../dynamic-content/dynamic-component';

@Component({
  selector: 'ext-level2-special',
  templateUrl: './ext-level2-special.component.html'
})
export class ExtLevel2SpecialComponent extends DynamicComponent<CustomerComponent> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
