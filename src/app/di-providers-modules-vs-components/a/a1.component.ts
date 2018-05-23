import { Component, OnInit } from '@angular/core';
import { ABaseService } from './a-base.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
  // providers: [ABaseService]
})
export class A1Component implements OnInit {

  constructor(private _svc: ABaseService) { }

  ngOnInit() {
    this._svc.callMe('A1Component');
  }

}
