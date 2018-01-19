import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList
} from '@angular/core';
import { WizardStepComponent } from './wizard-step/wizard-step.component';

@Component({
  selector: 'wizard-control',
  templateUrl: './wizard-control.component.html',
  styleUrls: ['./wizard-control.component.css']
})
export class WizardControlComponent implements OnInit, AfterContentInit {

  @ContentChildren(WizardStepComponent) steps: QueryList<WizardStepComponent>

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {

    if (this.steps.first){
      this.steps.first.current();
    }
  }

  onNext() {
    let nextDone = false;
    this.steps.forEach((item: WizardStepComponent, index: number, array: WizardStepComponent[]) => {
        if ((!nextDone) && (item.IsCurrent)) {
          if (array.length > index + 1) {
            item.noCurrent();
            array[index + 1].current();
            nextDone = true;
          }
        }
    });
  }

  onPrevious() {

  }

  onCancel() {

  }
}
