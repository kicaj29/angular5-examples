import { Component, OnInit } from '@angular/core';
import { ViewModel } from '../dynamic-content-demo/view-model';
import { DynamicComponent } from '../dynamic-content/dynamic-component';
import { CalculatorBaseService } from '../services/calculator-base.service';

@Component({
  selector: 'extension1',
  templateUrl: './extension1.component.html'
})
export class Extension1Component extends DynamicComponent<ViewModel> implements OnInit {

  constructor(private _svc: CalculatorBaseService) {
    super();
    debugger;
  }

  ngOnInit() {
  }

}
