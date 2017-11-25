import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.css']
})
export class ChangeDetectionStrategyComponent implements OnInit {

  @ViewChild('childComponent') child: ChildComponent;

  foods = ['Bacon', 'Lettuce', 'Tomatoes'];
  //_observer: Subscriber<Array<string>>;

  foodsObservable = new BehaviorSubject<Array<string>>(['rxjs-Bacon', 'rxjs-Letuce', 'rxjs-Tomatoes']);

  /*foodsObservable = new Observable<Array<string>>((observer: Subscriber<Array<string>>) => {
    this._observer = observer;
  });*/

  addFood(food) {
    this.foods.push(food);
    //if the ChildComponent uses OnPush we have to create new instance to see the changes!
    //this.foods = [...this.foods, food];
  }

  addFoodRxjs(food) {
    //this.foodsObservable.next([...this.foodsObservable.getValue(), food]);
    this.foodsObservable.next([food]);
    //this._observer.next(food);
  }

  constructor() { }

  ngOnInit() {
  }

  refresh(){
    this.child.refresh();
  }
}
