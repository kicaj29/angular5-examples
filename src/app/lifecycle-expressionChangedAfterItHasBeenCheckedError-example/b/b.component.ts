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

    //This causes ExpressionChangedAfterItHasBeenCheckedError because
    //this.parent.atext = 'TEXT - update onInit';

    //This does not cause ExpressionChangedAfterItHasBeenCheckedError because
    //'the ngOnInit lifecycle hook is triggered before the DOM update operation'.
    //Move it to ngAfterViewInit or ngAfterViewChecked to see this error!
    //this.parent.aname = 'NAME - update onInit';
  }

  ngAfterViewInit(){
    console.log('B: ngAfterViewInit');
    this.parent.aname = 'NAME - update AfterViewInit';
  }

  ngAfterViewChecked(){
    console.log('B: ngAfterViewChecked');
    //this.parent.aname = 'updated name3';
  }

  ngOnChanges(){
    console.log('B: ngOnChanges');
  }

  ngDoCheck(){
    console.log('B: ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('B: ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('B: ngAfterContentChecked');
  }


  ngOnDestroy(){
    console.log('B: ngOnDestroy');
  }
}
