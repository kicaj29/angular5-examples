import { Injectable } from '@angular/core';

@Injectable()
export class StoreBaseService {

  constructor() { }

  public callMe(): void {
    console.log('StoreBaseService');
  }

}
