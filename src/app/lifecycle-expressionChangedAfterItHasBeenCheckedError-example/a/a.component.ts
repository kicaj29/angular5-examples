import {ChangeDetectorRef, Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'lifecycle-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit, OnChanges {

  aname: string;
  atext: string;

  constructor(private cd: ChangeDetectorRef) {
    this.aname = 'NAME';
    this.atext = 'TEXT';
    console.log('A: constructor');
  }

  ngOnChanges(){
    console.log('A: ngOnChanges');
  }

  ngOnInit() {
    console.log('A: ngOnInit');
  }

  ngDoCheck(){
    console.log('A: ngDoCheck');
  }

  ngOnDestroy(){
    console.log('A: ngOnDestroy');
  }

  ngAfterContentInit(){
    console.log('A: ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('A: ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('A: ngAfterViewInit');

    this.cd.detectChanges();

    //this.atext = 'updated text';
    //this.name = 'asdasdasdasdas';
  }

  ngAfterViewChecked(){
    console.log('A: ngAfterViewChecked');
  }
}
