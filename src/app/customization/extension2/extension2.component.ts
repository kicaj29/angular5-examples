import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic-content/dynamic-component';
import { DynamicContentDemoComponent } from '../dynamic-content-demo/dynamic-content-demo.component';

@Component({
  selector: 'app-extension2',
  templateUrl: './extension2.component.html'
})
export class Extension2Component extends DynamicComponent<DynamicContentDemoComponent> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
