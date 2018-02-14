import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef
} from '@angular/core';
import { DynamicComponent } from './dynamic-component';
import { Extension1Component } from '../extension1/extension1.component';

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
  context: T;

  private mappings = {
    'sample1': DynamicSample1Component,
    'sample2': DynamicSample2Component,
    'ext1': Extension1Component,
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
