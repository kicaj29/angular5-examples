import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }

  @Input() foods: string[];

  @Input() foodsObservable: Observable<Array<any>>;
  foodsFromObservable: string[] = [];

  ngOnInit() {
    this.foodsObservable.subscribe(food => {
      this.foodsFromObservable = [...this.foodsFromObservable, ...food];
      //this.foodsFromObservable = food;
      //this.cd.markForCheck();
      //this.cd.detectChanges();
    });
  }

  refresh() {
    //this.cd.detectChanges();
    this.cd.markForCheck();
  }
}
