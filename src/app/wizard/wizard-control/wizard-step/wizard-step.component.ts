import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent implements OnInit {

  constructor() { }

  // TODO: how to deal with private that are accessed from the template in prod mode?
  private _isCurrent: boolean = false;

  get IsCurrent(): any {
    return this._isCurrent;
  };

  ngOnInit() {
  }

  current() {
    this._isCurrent = true;
  }

  noCurrent() {
    this._isCurrent = false;
  }
}
