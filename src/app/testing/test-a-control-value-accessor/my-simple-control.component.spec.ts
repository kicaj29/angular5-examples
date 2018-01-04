import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySimpleControlComponent } from './my-simple-control.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MySimpleControl2Component } from './my-simple-control2/my-simple-control2.component';

@Component({
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <my-simple-control formControlName="myField"></my-simple-control>
    </form>
  `
})
class TestHostComponent implements OnInit, AfterViewInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      myField: [ '123', Validators.required ]
    });
  }

  ngAfterViewInit() {
    this.myForm.valueChanges
      .subscribe(value => {
        console.log('Form changed', value);
      });
  }

  onSubmit() {
    if (!this.myForm.valid) {
      console.error('Parent Form invalid, preventing submission');
      return false;
    }
  }
}

describe('MySimpleControlComponent in reactive forms', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let el: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [TestHostComponent, MySimpleControl2Component, MySimpleControlComponent ]
    })
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('input')).nativeElement;
    //first whenStable that triggers ngModel in MySimpleControlComponent!
    fixture.whenStable().then(() => {
      //second whenStable that triggers ngModel in MySimpleControl2Component!
      fixture.detectChanges();
      //fixture.whenStable();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('INIT: my-simpe-control should have correct value', () => {
    //without detectChanges in whenStable this test fails!!!
    expect(el.value).toEqual('123');
  });

  it('INIT: form control should have correct value', () => {
    expect(component.myForm.get('myField').value).toEqual('123');
  });

  it('INIT: form should have correct value', () => {
    expect(component.myForm.value.myField).toEqual('123');
  });

  it('After user chanege: all values correct', () => {
    el.value = 'abc';
    el.dispatchEvent(new Event('input')); //it triggers data binding!
    fixture.detectChanges();
    //hm it looks that whenStable is not needed but maybe without it it would work randomly
    fixture.whenStable().then(() => {
      expect(el.value).toEqual('abc');
      expect(component.myForm.get('myField').value).toEqual('abc');
      expect(component.myForm.value.myField).toEqual('abc');
    });
  });

});
