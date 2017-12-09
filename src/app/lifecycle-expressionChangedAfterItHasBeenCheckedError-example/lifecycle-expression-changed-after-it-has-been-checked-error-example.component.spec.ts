import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleComponent } from './lifecycle-expression-changed-after-it-has-been-checked-error-example.component';

describe('LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleComponent', () => {
  let component: LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleComponent;
  let fixture: ComponentFixture<LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleExpressionChangedAfterItHasBeenCheckedErrorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
