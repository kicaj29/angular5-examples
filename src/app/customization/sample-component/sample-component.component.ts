import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit, AfterViewInit {

  //@ViewChild("tref", {read: ElementRef}) tref: ElementRef;
  //@ViewChild("tref", {read: ViewContainerRef}) tref: ViewContainerRef;

  @ViewChild(".my-class") myClass: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello world!');

    this.renderer.appendChild(div, text);
    debugger;
    const divFromTemplate = this.renderer.selectRootElement('.my-class');
    this.renderer.appendChild(divFromTemplate, div);
    //this.renderer.insertBefore(divFromTemplate, div, null);

    //this.renderer.nextSibling(divFromTemplate, div);
    //this.renderer.appendChild(this.el.nativeElement, div);
    //this.renderer.appendChild(this.myClass, div);

    //debugger;
    // outputs `I am span`
    //console.log(this.tref.nativeElement.textContent);
    //console.log(this.tref.nativeElement.outerHTML);
  }

}
