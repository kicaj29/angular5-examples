import { ExtLevel1GreetingComponent } from './ext-level1-greeting/ext-level1-greeting.component';
import { extLevel1GreetingServiceProvider } from './ext-level1-greeting/ext-level1-greeting.service';

export const EXT_LEVEL1_COMPONENTS = [
  ExtLevel1GreetingComponent
];

export const EXT_LEVEL1_COMPONENTS_MAPPING = [
  {
    'name': 'ext-level1-greeting',
    'type': ExtLevel1GreetingComponent
  }
];

export const EXT_LEVEL1_SERVICES = [
  extLevel1GreetingServiceProvider
]
