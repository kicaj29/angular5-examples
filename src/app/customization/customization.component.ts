import { Component, OnInit, SkipSelf } from '@angular/core';
import { CalculatorBaseService } from './services/calculator-base.service';
import {
  calculatorProvider,
  CalculatorService
} from './services/calculator.service';
import {
  superCalculatorProvider,
  SuperCalculatorService
} from './services/super-calculator.service';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css'],
  providers: [
    calculatorProvider,
    superCalculatorProvider
    ]
})
export class CustomizationComponent implements OnInit {

  constructor(private _svc: CalculatorBaseService) {
    debugger;
    let result = this._svc.add(1, 2);
  }

  ngOnInit() {
  }

}
