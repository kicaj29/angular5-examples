import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent implements OnInit {

  constructor() { }

  // TODO: how to deal with private that are accessed from the template in prod mode?
  public IsCurrent: boolean = false;


  ngOnInit() {
  }

  current() {
    this.IsCurrent = true;
  }

  noCurrent() {
    this.IsCurrent = false;
  }
}
