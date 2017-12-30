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

### Test a control value accessor
