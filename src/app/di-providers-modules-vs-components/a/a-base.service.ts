import { Injectable } from '@angular/core';

@Injectable()
export class ABaseService {

  constructor() {
    console.log('constructor: ABaseService');
  }

  callMe(from: string) {
    console.log('Called by: ' + from + ', I am: ABaseService');
  }

}
