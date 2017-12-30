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
export class CompParentComponent {

    constructor() { }

    @Input()
    public prop1: string = '';

    public prop2: string = '';
}
