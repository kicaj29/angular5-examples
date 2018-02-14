import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ViewModel } from '../dynamic-content-demo/view-model';

@Component({
  selector: 'dynamic-content',
  template: `
        <div>
            <div #container></div>
        </div>
    `
})
export class DynamicContentComponent<T> implements OnInit, OnDestroy {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input()
  type: string;

  @Input()
  context: any;

  private mappings = {
    'ext1': Extension1Component
    // 'sample2': DynamicSample2Component
  };

  private componentRef: ComponentRef<{}>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  getComponentType(typeName: string) {
    let type = this.mappings[typeName];
    return type || UnknownDynamicComponent;
  }

  ngOnInit() {
    if (this.type) {
      let componentType = this.getComponentType(this.type);

      // note: componentType must be declared within module.entryComponents
      let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);

      // set component context
      let instance = <DynamicComponent<T>> this.componentRef.instance;
      instance.context = this.context;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}

export abstract class DynamicComponent<T> {
  context: T;
}

@Component({
  selector: 'dynamic-sample-1',
  template: `<div>Dynamic sample 1 ({{context?.text}})</div>`
})
export class DynamicSample1Component extends DynamicComponent<any> {}

@Component({
  selector: 'dynamic-sample-2',
  template: `<div>Dynamic sample 2 ({{context?.text}})</div>`
})
export class DynamicSample2Component extends DynamicComponent<any> {}

@Component({
  selector: 'unknown-component',
  template: `<div>Unknown component ({{context?.text}})</div>`
})
export class UnknownDynamicComponent extends DynamicComponent<any> {}

@Component({
  selector: 'extension1',
  template: `
    <p>tralallaa</p>    
    <span>{{context.FirstName}} {{context.SecondName}}</span>
  `
})
export class Extension1Component extends DynamicComponent<ViewModel> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
