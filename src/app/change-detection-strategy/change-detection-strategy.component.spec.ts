import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionStrategyComponent } from './change-detection-strategy.component';

describe('ChangeDetectionStrategyComponent', () => {
  let component: ChangeDetectionStrategyComponent;
  let fixture: ComponentFixture<ChangeDetectionStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
