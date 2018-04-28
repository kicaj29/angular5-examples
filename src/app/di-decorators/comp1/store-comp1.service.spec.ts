import { TestBed, inject } from '@angular/core/testing';

import { StoreComp1Service } from './store-comp1.service';

describe('StoreComp1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreComp1Service]
    });
  });

  it('should be created', inject([StoreComp1Service], (service: StoreComp1Service) => {
    expect(service).toBeTruthy();
  }));
});
