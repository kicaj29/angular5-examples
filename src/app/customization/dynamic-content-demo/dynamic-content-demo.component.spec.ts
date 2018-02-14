import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContentDemoComponent } from './dynamic-content-demo.component';

describe('DynamicContentDemoComponent', () => {
  let component: DynamicContentDemoComponent;
  let fixture: ComponentFixture<DynamicContentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicContentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicContentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
