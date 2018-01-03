import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompParentComponent } from './comp-parent.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CompParentComponent', () => {
  let component: CompParentComponent;
  let fixture: ComponentFixture<CompParentComponent>;
  let elProp1Input: HTMLInputElement;
  let elProp2Input: HTMLInputElement;
  let elProp1p: HTMLElement;
  let elProp2p: HTMLElement;

  /*beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [
              CommonModule,
              FormsModule
          ],
          declarations: [ CompParentComponent ]
      });
      fixture = TestBed.createComponent(CompParentComponent);
      component = fixture.componentInstance;
      component.prop1 = 'prop1 (@Input)';
      component.prop2 = 'prop2 (NO @Input)';
      elProp1Input = fixture.debugElement.query(By.css('#prop1')).nativeElement;
      elProp2Input = fixture.debugElement.query(By.css('#prop2')).nativeElement;
      elProp1p = fixture.debugElement.query(By.css('#prop1p')).nativeElement;
      elProp2p = fixture.debugElement.query(By.css('#prop2p')).nativeElement;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let x = 1;
        debugger;
      });
    });*/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule
      ],
      declarations: [ CompParentComponent ]
    });
    fixture = TestBed.createComponent(CompParentComponent);
    component = fixture.componentInstance;
    component.prop1 = 'prop1 (@Input)';
    component.prop2 = 'prop2 (NO @Input)';
    elProp1Input = fixture.debugElement.query(By.css('#prop1')).nativeElement;
    elProp2Input = fixture.debugElement.query(By.css('#prop2')).nativeElement;
    elProp1p = fixture.debugElement.query(By.css('#prop1p')).nativeElement;
    elProp2p = fixture.debugElement.query(By.css('#prop2p')).nativeElement;
    fixture.detectChanges();
    fixture.whenStable(); //wait on promise to start executing first test!
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('INIT: inputes and p have correct values', () => {
    //use value for inputs to execute assertion
    expect(elProp1Input.value).toEqual('prop1 (@Input)');
    expect(elProp2Input.value).toEqual('prop2 (NO @Input)');

    //use textContent for p tag to execute assertion
    expect(elProp1p.textContent).toEqual('prop1 (@Input)');
    expect(elProp2p.textContent).toEqual('prop2 (NO @Input)');
  });


  it('After user change: inputes and p have correct values', () => {

    elProp1Input.value = 'xyz';
    elProp2Input.value = 'abc';
    elProp1Input.dispatchEvent(new Event('input')); //it triggers data binding!
    elProp2Input.dispatchEvent(new Event('input')); //it triggers data binding!

    fixture.detectChanges();

    //hm it looks that whenStable is not needed but maybe without it it would work randomly
    fixture.whenStable().then(() => {
      //use value for inputs to execute assertion
      expect(elProp1Input.value).toEqual('xyz');
      expect(elProp2Input.value).toEqual('abc');

      //use textContent for p tag to execute assertion
      expect(elProp1p.textContent).toEqual('xyz');
      expect(elProp2p.textContent).toEqual('abc');
    });
  });

});
