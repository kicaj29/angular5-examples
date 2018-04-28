import {Component, Host, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import { StoreBaseService } from './store-base.service';

@Component({
  selector: 'di-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers: [StoreBaseService]
})
export class Comp1Component implements OnInit {

  private _svc: StoreBaseService
  constructor(svc: StoreBaseService, @SkipSelf() @Optional() svcSkipSelf: StoreBaseService) {
    this._svc = svcSkipSelf || svc;
  }

  ngOnInit() {
    this._svc.callMe();
  }

}
