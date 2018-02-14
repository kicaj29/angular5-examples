import { Component, OnInit } from '@angular/core';
import { ViewModel } from '../dynamic-content-demo/view-model';
import { DynamicComponent } from '../dynamic-content/dynamic-component';

@Component({
  selector: 'extension1',
  templateUrl: './extension1.component.html'
})
export class Extension1Component extends DynamicComponent<ViewModel> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
