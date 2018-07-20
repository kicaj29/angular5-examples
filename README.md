# angular5-examples

In this repository you can find many different examples from angular 5.

## Change detection strategy

Angular can skip entire change detection subtrees when input properties don’t change. __“Change” means “new reference”__.   If we use immutable objects in our Angular app, all we need to do is tell Angular that a component can skip change detection, if its input hasn’t changed.

From stackoverflow:   
* *Use __detectChanges()__ when you've updated the model after angular has run it's change detection, or if the update hasn't been in angular world at all.*

* *Use __markForCheck()__ if you're using __OnPush__ and you're bypassing the ChangeDetectionStrategy by mutating some data or you've updated the model inside a setTimeout
__Angular doc__: Checks the change detector and its children. This can also be used in combination with detach to implement local change detection checks.*   
   
Angular doc:
* *__detectChanges()__: Checks the change detector and its children. This can also be used in combination with detach to implement local change detection checks.*
* *__markForCheck()__: Marks all OnPush ancestors as to be checked.* 

https://alligator.io/angular/change-detection-strategy/   
https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
https://angular.io/api/core/ChangeDetectorRef#changedetectorref   
https://stackoverflow.com/questions/41364386/whats-the-difference-between-markforcheck-and-detectchanges/45396740#45396740   
https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4   

## Lifecycle and 'expressionChangedAfterItHasBeenCheckedError-example'
https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4   
*   The culprit is always the child component or a directive.
*   Angular enforces so-called unidirectional data flow from top to bottom. No component lower in hierarchy is allowed to update properties of a parent component __after parent changes have been processed__.
*   expressionChangedAfterItHasBeenCheckedError is only for dev mode, it will not happen in prod mode, why? *'I guess this is because an unstable model is not as dramatic problem as a runtime error produced by the framework. After all it may stabilize in the next digest run. However, it’s better to be notified of the possible error when developing an application than debug a running application on the client side.'*

## Testing
https://angular.io/guide/testing

### Test a component
The ComponentFixtureAutoDetect service responds to asynchronous activities such as promise resolution, timers, and DOM events.
But a direct, synchronous update of the component property is invisible. The test must call fixture.detectChanges() manually to trigger another cycle of change detection.

### Test a component with external template
First beforeEach must be asynchronous, next synchronous or use then from promise returned by compileComponents().
__WebPack developers need not call compileComponents because it inlines templates and css as part of the automated build process that precedes running the test.__

### Test a component with a dependency
Do not reference the userServiceStub object that's provided to the testing module in the body of your test.
It does not work! The userService instance injected into the component is a completely different object, a clone of the provided userServiceStub.   

https://angular.io/guide/testing#test-a-component-with-a-dependency

### Test a component with an async service
https://angular.io/guide/testing#test-a-component-with-an-async-service

You can't call async or fakeAsync when testing code that involves the intervalTimer, as is common when testing async Observable methods.
For such case you have to use __done__ callback.

### Test a component with inputs and outputs
https://angular.io/guide/testing#test-a-component-with-inputs-and-outputs   
It contains example with testing the component directly and also via TestHostComponent.

### Test a component with ngModel
NgModel is asynchronous: https://github.com/angular/angular/commit/f444c11d218d26ac817d5f3b12e19c6b4b8d2390   
https://medium.com/@sevcsik/testing-ngmodel-in-angular-2-d9c79923f973   
https://shekhargulati.com/2017/07/13/unit-testing-ngmodel-in-angular-4/

### Test a control value accessor (also with ngModel)
Use *el.dispatchEvent(new Event('input'))* to simulate user and trigger data binding.   
In *my-simple-control.component.spec.ts* is example with nested components
and nested ngModels, in such case *whenStable()* has to be called and in *then* we should call *detectChanges*.

### Test a component with debounceTime
https://medium.com/@golbie/angular-testing-async-stuff-in-the-fakedasync-zone-vs-providing-custom-schedulers-27a7f83c7774

## Wizard
It supports:
*   Adding/removing steps for already initialized wizard

Links:
https://codepen.io/jaggedsoft/pen/xOmKxv   
https://github.com/angular/angular/issues/8563   
https://stackoverflow.com/questions/44284026/creating-a-angular2-component-with-ng-content-dynamically   
https://plnkr.co/edit/vfVsBnoOnhDFVuN9COl4?p=preview   

## HttpClient
https://angular.io/guide/http#httpclient   
Advantages in comparison to previous Http class:
*   it is generic, e.g you can do
```
this.http.get<Customer>
```
*   class for handling errors HttpErrorResponse. It covers client side and network errors and also errors returned by the backend. In Http class was used type any.
*   interceptors
*   HttpParams is immutable

## Customization
https://denysvuika.blog/2017/10/07/dynamic-content-in-angular/   
https://alligator.io/angular/content-projection-angular/   
https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02   
https://alligator.io/angular/using-renderer2/   
https://www.concretepage.com/angular-2/angular-4-renderer2-example   
https://embed.plnkr.co/7DJ1nWN6sl563hcR71FV/   
https://github.com/angular/angular/issues/19515   
https://stackoverflow.com/questions/36055585/renderer-multiple-selectrootelement-issue-with-plnkr-provided

## Components interaction   

## Shadow DOM
https://toddmotto.com/emulated-native-shadow-dom-angular-2-view-encapsulation   
https://github.com/angular/material2/issues/3386
*   When __Emulated__ ViewEncapsulation is used in a component then all css classes defined for this component are encapsulated and will not impact other DOM elements.
So when ShadowDomComponent uses Emulated the red color does not impact SimpleComponent even if SimpleComponent uses ViewEncapsulation.None!
*   When __Native__ ViewEncapsulation is used on parent component then all children components also have to use __Native__ to not be impacted by classes defined for the parent.
So when ShadowDomComponent uses __Native__ the red color does not impact SimpleComponent only if SimpleComponent uses ViewEncapsulation.Native!
*   If SCSS is used we have one entry for the SCSS compiler so then it does not make sense to refer to css files in component decorator.

## DI Decorators
https://medium.com/@tomsu/self-or-optional-host-the-visual-guide-to-angular-di-decorators-73fbbb5c8658
https://angular.io/guide/providers#limiting-provider-scope-by-lazy-loading-modules   

__When the Angular router lazy-loads a module, it creates a new injector. This injector is a child of the root application injector.__   
   
### @SkipSelf()
### @Self()
### @Host()

## ForRoot vs ForChild
http://weblogs.thinktecture.com/thomas/2017/05/the-real-secrets-behind-forroot-andor-forchild-of-an-ngmodule.html   
https://stackoverflow.com/questions/40498081/routermodule-forrootroutes-vs-routermodule-forchildroutes   
https://github.com/Yonet/Angular-Interview-Questions/blob/master/router.md   

If there is some module that provides some service and there is a need to import this module in app module and lazy loaded module
there will be created to instances of this service: one for the app module and second for the lazy loaded module.
To be sure that there will be only one instance of the service create methods *forRoot* and *forChild* like in router module.   
   
   
*forChild creates a module that contains all the directives and the given routes, but does not include the router service.
It registers the routers and uses the router service created at the root level*

## DI Modules vs Providers
https://codecraft.tv/courses/angular/dependency-injection-and-providers/ngmodule-providers-vs-component-providers-vs-component-viewproviders/   
https://angular.io/guide/architecture-modules   
https://medium.com/@cyrilletuzi/understanding-angular-modules-ngmodule-and-their-scopes-81e4ed6f7407   
*Note: since Angular 6, services don’t need to be registered in a module anymore. The use of “providers” in a NgModule is now limited to overriding existing services.*
   
providers (for modules) — creators of services that this NgModule contributes to the __global collection__ of services; they become accessible in all parts of the app. (You can also specify providers at the component level, which is often preferred.)

NOTE to the example: if ABaseService would be provided in A1 component that A1 and all A1 children components would use type ABaseService because providing it in A1 component creates
a new injector (node) in injector tree. If ABaseService is not provided for A1 everywhere is used AdaptABaseService!

## ng-template vs ng-content
https://medium.com/michalcafe/angulars-content-projection-trap-and-why-you-should-consider-using-template-outlet-instead-cc3c4cad87c9
