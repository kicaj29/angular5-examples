import { Component, OnInit } from '@angular/core';
import { ABaseService } from '../a-base.service';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.css']
})
export class B1Component implements OnInit {

  constructor(private _svc: ABaseService) { }

  ngOnInit() {
    this._svc.callMe('B1Component');
  }

}
