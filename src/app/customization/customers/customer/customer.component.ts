import { Component, OnInit } from '@angular/core';
import { CustomerViewModel } from './customer.view-model';
import { CustomerWriteBaseService } from './customer-write-base.service';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  viewModel: CustomerViewModel;
  instance: CustomerComponent;
  constructor(private _svc: CustomerWriteBaseService) {

    this.instance = this;

    this.viewModel = new CustomerViewModel();
    this.viewModel.FirstName = "Jacek";
    this.viewModel.SecondName = "Kowalski";
  }

  ngOnInit() {
  }

  save() {
    this._svc.saveCustomer(this.viewModel);
  }
}
