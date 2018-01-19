import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardControlComponent } from './wizard-control.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';

describe('WizardControlComponent', () => {
  let component: WizardControlComponent;
  let fixture: ComponentFixture<WizardControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardControlComponent, WizardStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
