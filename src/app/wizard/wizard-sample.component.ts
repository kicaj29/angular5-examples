import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-sample',
  templateUrl: './wizard-sample.component.html',
  styleUrls: ['./wizard-sample.component.css']
})
export class WizardSampleComponent implements OnInit {

  showStep3: boolean  = false;

  constructor() { }

  ngOnInit() {
  }

}
