import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.css']
})
export class ChangeDetectionStrategyComponent implements OnInit {

  @ViewChild('childComponent') child: ChildComponent;

  foods = ['Bacon', 'Lettuce', 'Tomatoes'];

  foodsObservable = new BehaviorSubject(['rxjs-Bacon', 'rxjs-Letuce', 'rxjs-Tomatoes']);

  addFood(food) {

    this.foods.push(food);
    //this.foods = [...this.foods, food];
  }

  addFoodRxjs(food) {
    this.foodsObservable.next(food);
  }

  constructor() { }

  ngOnInit() {
  }

  refresh(){
    this.child.refresh();
  }
}
