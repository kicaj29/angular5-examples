import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AComponent } from '../a/a.component';

@Component({
  selector: 'lifecycle-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  @Input() btext;

  constructor(private parent: AComponent, private cd: ChangeDetectorRef) {
    console.log('B: constructor');
    //this.parent.atext = 'TEXT - update constructor';
  }

  ngOnInit() {
    console.log('B: ngOnInit');

    //This causes ExpressionChangedAfterItHasBeenCheckedError:
    this.parent.atext = 'TEXT - update onInit';
    //NOTE: see in details of ExpressionChangedAfterItHasBeenCheckedError (DebugContext -> view -> old values)
    //that for atext we have 2 values and for aname only 1 value. Probably it is caused
    //by passing atext as input to BComponent

    //NOTE1: if in a.component in ngAfterViewInit we call this.cd.detectChanges() then the error will not occur!!!



    //This does not cause ExpressionChangedAfterItHasBeenCheckedError because
    //'the ngOnInit lifecycle hook is triggered before the DOM update operation'.
    //Move it to ngAfterViewInit or ngAfterViewChecked to see this error!
    //this.parent.aname = 'NAME - update onInit';
  }

  ngAfterViewInit(){
    // When this function is called the DOM is already rendered values from data binding in A and B component!!!

    console.log('B: ngAfterViewInit');

    //This causes ExpressionChangedAfterItHasBeenCheckedError:
    //this.parent.aname = 'NAME - update AfterViewInit!';
  }

  ngAfterViewChecked(){
    console.log('B: ngAfterViewChecked');
    //this.parent.aname = 'NAME - update AfterViewChecked';
  }

  ngOnChanges(){
    console.log('B: ngOnChanges');

    //This causes ExpressionChangedAfterItHasBeenCheckedError:
    //this.parent.atext = 'TEXT - update ngOnChanges';
  }

  ngDoCheck(){
    console.log('B: ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('B: ngAfterContentInit');
    //this.parent.aname = 'NAME - update AfterContentInit';
  }

  ngAfterContentChecked(){
    console.log('B: ngAfterContentChecked');
    //this.parent.aname = 'NAME - update AfterContentChecked';
  }


  ngOnDestroy(){
    console.log('B: ngOnDestroy');
  }
}
