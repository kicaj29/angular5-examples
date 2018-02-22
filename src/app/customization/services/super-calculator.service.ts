import { CalculatorBaseService } from './calculator-base.service';
import { Injectable, forwardRef, Inject } from '@angular/core';
import { Injector } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { AnotherService } from './another.service.ts';

@Injectable()
export class SuperCalculatorService extends CalculatorBaseService {

  private _decoratedService: CalculatorBaseService;
  constructor() {
    super();
  }

  public setDecoratedObject(svc: CalculatorBaseService) {
    this._decoratedService = svc;
  }

  public add(val1: number, val2: number) : number {
    this._decoratedService.add(val1, val2);
    debugger;
    //let x = this.injector.get(CalculatorBaseService);
    debugger;
    return 0;
  }
}

let superCalculatorServiceFactory = (injector: Injector) => {
  debugger;
  let svc = new SuperCalculatorService();

  let anotherSvc = injector.get(AnotherService);
  let decoratedSvc = new CalculatorService(anotherSvc);
  svc.setDecoratedObject(decoratedSvc);

  return svc;

};

export let superCalculatorProvider =
  { provide: CalculatorBaseService,
    useFactory: superCalculatorServiceFactory,
    deps: [Injector]
  };
