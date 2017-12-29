import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const COMP_PARENT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CompParentComponent),
    multi: true
};

@Component({
  selector: 'comp-parent',
  templateUrl: './comp-parent.component.html',
  styleUrls: ['./comp-parent.component.scss'],
  providers: [COMP_PARENT_CONTROL_VALUE_ACCESSOR]
})
export class CompParentComponent implements OnInit, ControlValueAccessor {

    constructor() { }

    @Input()
    public innerValue: string = '';

    propagateChange: (_: any) => {};

    propagateTouched = () => {};

    writeValue(obj: any): void {
        if ((obj) && (obj !== this.innerValue)) {
            this.innerValue = obj;
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
    }

    ngOnInit() {
    }

    get value(): any {
        return this.innerValue;
    };

    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.propagateChange(v);
        }
    }

}
