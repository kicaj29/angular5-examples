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
