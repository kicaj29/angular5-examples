import { Component, OnInit } from '@angular/core';
import { CustomerViewModel } from './customer.view-model';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  viewModel: CustomerViewModel;
  instance: CustomerComponent;
  constructor() {

    this.instance = this;

    this.viewModel = new CustomerViewModel();
    this.viewModel.FirstName = "Jacek";
    this.viewModel.SecondName = "Kowalski";
  }

  ngOnInit() {
  }

}
