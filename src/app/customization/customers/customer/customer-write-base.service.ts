import { CustomerViewModel } from './customer.view-model';
import { Injectable } from "@angular/core";
import { CustomerRestApiRegistryService } from '../customer-rest-api-registry.service';

@Injectable()
export abstract class CustomerWriteBaseService {

  abstract saveCustomer(custViewModel: CustomerViewModel) : boolean;
}
