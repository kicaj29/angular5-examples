import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef
} from '@angular/core';
import { DynamicComponent } from './dynamic-component';
import { extensionsMappings } from '../extenstions';

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

  private mappings = [...extensionsMappings];

  private componentRef: ComponentRef<{}>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  getComponentType(typeName: string) {
    //let type = this.mappings[typeName];
    //return type || UnknownDynamicComponent;
    let mapping = this.mappings.find(value => value.name === typeName);
    if (mapping) {
      return mapping.type;
    } else {
      return UnknownDynamicComponent;
    }
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
  selector: 'unknown-component',
  template: `<div></div>`
})
export class UnknownDynamicComponent extends DynamicComponent<any> {}
