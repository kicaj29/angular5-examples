import { async, ComponentFixture, TestBed
} from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Hero } from './hero';
import { DashboardHeroComponent } from './dashboard-hero.component';
import { click } from '../helpers';

describe('DashboardHeroComponent (inputs and outputs) when tested directly', () => {
  let comp: DashboardHeroComponent;
  let expectedHero: Hero;
  let fixture: ComponentFixture<DashboardHeroComponent>;
  let heroEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeroComponent ],
    });
    fixture = TestBed.createComponent(DashboardHeroComponent);
    comp    = fixture.componentInstance;
    heroEl  = fixture.debugElement.query(By.css('.hero')); // find hero element

    // pretend that it was wired to something that supplied a hero
    expectedHero = new Hero(42, 'Test Name');
    comp.hero = expectedHero;
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should display hero name', () => {
    const expectedPipedName = expectedHero.name.toUpperCase();
    expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
  });

  it('should raise selected event when clicked', () => {
    let selectedHero: Hero;
    comp.selected.subscribe((hero: Hero) => selectedHero = hero);

    heroEl.triggerEventHandler('click', null);
    expect(selectedHero).toBe(expectedHero);
  });

  it('should raise selected event when clicked v2 - helpers', () => {
    let selectedHero: Hero;
    comp.selected.subscribe((hero: Hero) => selectedHero = hero);

    click(heroEl);
    expect(selectedHero).toBe(expectedHero);
  });


});

////// Test Host Component //////
import { Component } from '@angular/core';

@Component({
  template: `
    <dashboard-hero  [hero]="hero"  (selected)="onSelected($event)"></dashboard-hero>`
})
class TestHostComponent {
  hero = new Hero(42, 'Test Name');
  selectedHero: Hero;
  onSelected(hero: Hero) { this.selectedHero = hero; }
}

describe('DashboardHeroComponent (inputs and outputs) when inside a test host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let heroEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeroComponent, TestHostComponent ], // declare both
    });

    // create TestHostComponent instead of DashboardHeroComponent
    fixture  = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    heroEl   = fixture.debugElement.query(By.css('.hero')); // find hero
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should display hero name', () => {
    const expectedPipedName = testHost.hero.name.toUpperCase();
    expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
  });

  it('should raise selected event when clicked', () => {
    click(heroEl);
    // selected hero should be the same data bound hero
    expect(testHost.selectedHero).toBe(testHost.hero);
  });
});
