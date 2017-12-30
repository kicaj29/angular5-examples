import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const MY_SIMPLE_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MySimpleControlComponent),
  multi: true
};

@Component({
  selector: 'my-simple-control',
  templateUrl: './my-simple-control.component.html',
  styleUrls: ['./my-simple-control.component.css'],
  providers: [ MY_SIMPLE_CONTROL_VALUE_ACCESSOR ]
})
export class MySimpleControlComponent implements ControlValueAccessor {

  private innerValue: any = '';
  private isDisabled: boolean = false;

  constructor() { }

  //Use declaration (:) not definition (=) because then we get undefined value if registerOnChange have not been called
  //so it is easier to recognize that something is not right!
  private onTouchedCallback: () => {};

  private onChangeCallback: (_: any) => {};

  writeValue(obj: any): void {
    if (obj !== this.innerValue) {
      this.innerValue = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onBlur() {
    this.onTouchedCallback();
  }

  get value(): any {
    return this.innerValue;
  };

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }
}
