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

  @Input() data: string[];

  @Input() dataFromRxJs: Observable<any>;
  foods: string[] = [];

  ngOnInit() {
    this.dataFromRxJs.subscribe(food => {
      this.foods = [...this.foods, ...food];
      //this.cd.markForCheck();
      this.cd.detectChanges();
    });
  }

  refresh() {
    this.cd.detectChanges();
  }
}
