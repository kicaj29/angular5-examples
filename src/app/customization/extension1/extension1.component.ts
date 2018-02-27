import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic-content/dynamic-component';
import { CalculatorBaseService } from '../services/calculator-base.service';
import { CustomerViewModel } from '../customer/customer.view-model';

@Component({
  selector: 'extension1',
  templateUrl: './extension1.component.html'
})
export class Extension1Component extends DynamicComponent<CustomerViewModel> implements OnInit {

  constructor(private _svc: CalculatorBaseService) {
    super();
    debugger;
  }

  ngOnInit() {
  }

}
