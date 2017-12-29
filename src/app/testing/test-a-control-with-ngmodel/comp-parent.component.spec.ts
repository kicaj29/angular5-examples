import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompParentComponent } from './comp-parent.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

fdescribe('CompParentComponent', () => {
  let component: CompParentComponent;
  let fixture: ComponentFixture<CompParentComponent>;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [
              CommonModule,
              FormsModule
          ],
          declarations: [ CompParentComponent ]
      });
      fixture = TestBed.createComponent(CompParentComponent);
      component = fixture.componentInstance;
      debugger;
      //component.value = '123';
      //component.writeValue('123');
      component.innerValue = '123';
      debugger;
      fixture.detectChanges();
      debugger;
      fixture.whenStable().then(() => {
        let x = 1;
        debugger;
      });
    });

  /*beforeEach(async(() => {
    TestBed.configureTestingModule({
          imports: [
              CommonModule,
              FormsModule
          ],
          declarations: [ CompParentComponent ]
      });
    fixture = TestBed.createComponent(CompParentComponent);
    component = fixture.componentInstance;
    component.value = '123';
    fixture.detectChanges();
    fixture.whenStable();
  }));*/

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
