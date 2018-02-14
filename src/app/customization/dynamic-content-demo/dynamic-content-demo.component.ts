import { Component, OnInit } from '@angular/core';
import { ViewModel } from './view-model';

@Component({
  selector: 'dynamic-content-demo',
  templateUrl: './dynamic-content-demo.component.html',
  styleUrls: ['./dynamic-content-demo.component.css']
})
export class DynamicContentDemoComponent implements OnInit {

  viewModel: ViewModel;

  constructor() {
    this.viewModel = new ViewModel();
    this.viewModel.FirstName = "Jacek";
    this.viewModel.SecondName = "Kowalski";
  }

  ngOnInit() {
  }

}
