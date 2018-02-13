import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ContentChildren,
  OnInit,
  QueryList,
  ViewContainerRef
} from '@angular/core';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { SimpleComponent } from '../simple/simple.component';

@Component({
  selector: 'wizard-control',
  templateUrl: './wizard-control.component.html',
  styleUrls: ['./wizard-control.component.css']
})
export class WizardControlComponent implements OnInit, AfterContentInit {

  @ContentChildren(WizardStepComponent) steps: QueryList<WizardStepComponent>

  constructor(private _vcRef: ViewContainerRef, private _cfr: ComponentFactoryResolver) { }

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

  onAddNew(){
    const simpleFactory = this._cfr.resolveComponentFactory(SimpleComponent);
    let simpleRef = this._vcRef.createComponent(simpleFactory);

    const stepFactory = this._cfr.resolveComponentFactory(WizardStepComponent);

    const stepRef = this._vcRef.createComponent(
      stepFactory,
      0,
      undefined,
      [
        [simpleRef.location.nativeElement]
      ]
    );
  }
}
