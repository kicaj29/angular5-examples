import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

export const COMP_PARENT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CompDebounceTimeComponent),
    multi: true
};

export class InputValueChangedEventData {
  constructor(public event: Event, public value: any) {
  }
}

@Component({
  selector: 'comp-debounce-time',
  templateUrl: './comp-debounce-time.component.html',
  styleUrls: ['./comp-debounce-time.component.scss'],
  providers: [COMP_PARENT_CONTROL_VALUE_ACCESSOR]
})
export class CompDebounceTimeComponent {

  constructor(private _elementRef: ElementRef) { }

  @Output() valueChangedEvent: EventEmitter<InputValueChangedEventData> = new EventEmitter();

  @Input()
  public prop1: string = '';

  ngOnInit() {
    const eventStream = Observable.fromEvent(this._elementRef.nativeElement, 'input')
      .debounceTime(0);
      //.distinctUntilChanged();

    eventStream.subscribe((event: Event) => {
      this.valueChangedEvent.emit(new InputValueChangedEventData(event, (<HTMLInputElement>event.target).value));
    });
  }

  handleInput(event: Event) {
      //this.valueChangedEvent.emit(new InputValueChangedEventData(event, (<HTMLInputElement>event.target).value));
  }
}
