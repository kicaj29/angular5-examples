import { Component, OnInit } from '@angular/core';
import { StoreDiService } from './store-di.service';
import { StoreBaseService } from './comp1/store-base.service';

@Component({
  selector: 'app-di-decorators',
  templateUrl: './di-decorators.component.html',
  styleUrls: ['./di-decorators.component.css'],
  providers: [
    // { provide: StoreBaseService, useClass: StoreDiService }
    ]
})
export class DiDecoratorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
