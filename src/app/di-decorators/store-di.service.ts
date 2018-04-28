import { Injectable } from '@angular/core';
import {StoreBaseService} from './comp1/store-base.service';

@Injectable()
export class StoreDiService extends StoreBaseService {

  constructor() {
    super();
  }

  public callMe(): void {
    console.log('StoreDiService');
  }
}
