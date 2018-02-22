import { CalculatorBaseService } from './calculator-base.service';
import { Injectable } from '@angular/core';
import { AnotherService } from './another.service.ts';

@Injectable()
export class CalculatorService extends CalculatorBaseService {

  constructor(private svc: AnotherService){
    super();
  }

  public add(val1: number, val2: number) : number {
    this.svc.DoSomething();
    return val1 + val2;
  }
}

let calculatorServiceFactory = (svc: AnotherService) => {
  debugger;
  return new CalculatorService(svc);
};

export let calculatorProvider =
  { provide: CalculatorBaseService,
    useFactory: calculatorServiceFactory,
    deps: [AnotherService]
  };
