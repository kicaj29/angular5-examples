import { Injectable } from '@angular/core';
import {ABaseService} from './a/a-base.service';

@Injectable()
export class AdaptABaseService extends ABaseService {

  constructor() {
    super();
    console.log('constructor: AdaptABaseService');
  }

  callMe(from: string) {
    console.log('Called by: ' + from + ', I am: AdaptABaseService');
  }
}
