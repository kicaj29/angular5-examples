import { Injectable } from '@angular/core';
import { StoreBaseService } from './di-decorators/comp1/store-base.service';

@Injectable()
export class StoreAppModuleService extends StoreBaseService {

  constructor() {
    super();
  }

  public callMe(): void {
    console.log('StoreAppModuleService');
  }

}
