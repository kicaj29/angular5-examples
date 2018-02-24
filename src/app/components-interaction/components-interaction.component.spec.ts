import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsInteractionComponent } from './components-interaction.component';

describe('ComponentsInteractionComponent', () => {
  let component: ComponentsInteractionComponent;
  let fixture: ComponentFixture<ComponentsInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
