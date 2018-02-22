import { Injectable } from '@angular/core';

@Injectable()
export abstract class CalculatorBaseService {
  public abstract add(val1: number, val2: number) : number;
}
