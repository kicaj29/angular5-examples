import { CustomerWriteBaseService } from './customer-write-base.service';
import { CustomerViewModel } from './customer.view-model';
import { Injectable } from "@angular/core";
import { CustomerRestApiRegistryService } from '../customer-rest-api-registry.service';

@Injectable()
export class CustomerWriteService extends CustomerWriteBaseService {

    constructor (protected svcRegistry: CustomerRestApiRegistryService){
      super();
    }

    saveCustomer(custViewModel: CustomerViewModel) : boolean {
      console.log(`writing customer to product service: ${JSON.stringify(custViewModel)} to URL ${this.svcRegistry.getCustomerWriteUrl()}`);
      return true;
    }
}
