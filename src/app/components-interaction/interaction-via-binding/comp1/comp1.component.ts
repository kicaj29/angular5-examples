import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  IsComp1Loading: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  startLoading() {
    this.IsComp1Loading = true;
  }

  endLoading() {
    this.IsComp1Loading = false;
  }
}
