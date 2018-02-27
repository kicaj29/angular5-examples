import { Injectable } from '@angular/core';

@Injectable()
export class CustomerRestApiRegistryService {
  getCustomerWriteUrl() : string {
    return 'product/customers';
  }
}
