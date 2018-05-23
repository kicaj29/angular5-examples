import { Component, OnInit } from '@angular/core';
import {ABaseService} from './a/a-base.service';

@Component({
  selector: 'app-di-providers-modules-vs-components',
  templateUrl: './di-providers-modules-vs-components.component.html',
  styleUrls: ['./di-providers-modules-vs-components.component.css']
})
export class DiProvidersModulesVsComponentsComponent implements OnInit {

  constructor(private _svc: ABaseService) { }

  ngOnInit() {
    this._svc.callMe('DiProvidersModulesVsComponentsComponent');
  }

}
