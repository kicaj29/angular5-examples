import { Injectable } from '@angular/core';
import {StoreBaseService} from './store-base.service';

@Injectable()
export class StoreComp1Service extends StoreBaseService{

  constructor() {
    super();
  }

  public callMe(): void {
    console.log('StoreComp1Service');
  }
}
