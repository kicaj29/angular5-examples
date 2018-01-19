import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardSampleComponent } from './wizard-sample.component';

describe('WizardSampleComponent', () => {
  let component: WizardSampleComponent;
  let fixture: ComponentFixture<WizardSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
