import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-content-demo',
  templateUrl: './dynamic-content-demo.component.html',
  styleUrls: ['./dynamic-content-demo.component.css']
})
export class DynamicContentDemoComponent implements OnInit {

  context: any = {
    text: 'test'
  }

  constructor() { }

  ngOnInit() {
  }

}
