import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CompDebounceTimeComponent } from './comp-debounce-time.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AsyncScheduler } from 'rxjs/scheduler/AsyncScheduler';



describe('CompDebounceTimeComponent', () => {
  let component: CompDebounceTimeComponent;
  let fixture: ComponentFixture<CompDebounceTimeComponent>;
  let elProp1Input: HTMLInputElement;
  let elProp1p: HTMLElement;
  let timeInSyncKeeper;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule
      ],
      declarations: [ CompDebounceTimeComponent ]
    });
    fixture = TestBed.createComponent(CompDebounceTimeComponent);
    component = fixture.componentInstance;
    component.prop1 = 'prop1 (@Input)';
    elProp1Input = fixture.debugElement.query(By.css('#prop1')).nativeElement;
    elProp1p = fixture.debugElement.query(By.css('#prop1p')).nativeElement;
    fixture.detectChanges();
    fixture.whenStable(); //wait on promise to start executing first test!
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('valueChangedEvent should be fired', fakeAsync(() => {
    component.valueChangedEvent.subscribe(() => {
      console.log('valueChangedEvent');
    });
    elProp1Input.value = 'abc';
    elProp1Input.dispatchEvent(new Event('input')); //it triggers data binding!
    fixture.detectChanges();
    fixture.whenStable();
    tick(2000);
  }));

});
