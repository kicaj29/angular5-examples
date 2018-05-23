import { Injectable, Injector } from "@angular/core";
import { CustomerWriteBaseService } from '../../customer-write-base.service';
import { CustomerViewModel } from '../../customer.view-model';
import { CustomerRestApiRegistryService } from '../../../customer-rest-api-registry.service';
import { CustomerWriteService } from '../../customer-write.service.ts';

@Injectable()
export class ExtLevel1GreetingService extends CustomerWriteBaseService {

  private _svc: CustomerWriteBaseService;

  constructor() {
    super();
  }

  setDecoratedObject(svc: CustomerWriteBaseService) {
    this._svc = svc;
  }

  saveCustomer(custViewModel: CustomerViewModel) : boolean {
    if (this._svc.saveCustomer(custViewModel)) {
      console.log(`writing customer to NOT product service: ${JSON.stringify(custViewModel)}`);
      return true;
    } else {
      return false;
    }
  }
}

let extLevel1GreetingServiceFactory = (injector: Injector) => {
  let registrySvc = injector.get(CustomerRestApiRegistryService);
  let decoratedService = new CustomerWriteService(registrySvc);

  let svc = new ExtLevel1GreetingService();
  svc.setDecoratedObject(decoratedService);
  return svc;
};

export let extLevel1GreetingServiceProvider =
  { provide: CustomerWriteBaseService,
    useFactory: extLevel1GreetingServiceFactory,
    deps: [Injector]
  };
