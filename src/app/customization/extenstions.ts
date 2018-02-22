import { Extension1Component } from './extension1/extension1.component';
import { Extension2Component } from './extension2/extension2.component';
import { superCalculatorProvider } from './services/super-calculator.service';

export const extensionsTypes = [
  Extension1Component, Extension2Component
];

export const extensionsMappings = [
  {
    'name': 'ext1',
    'type': Extension1Component
  },
  {
    'name': 'ext2',
    'type': Extension2Component
  }
];

export const extensionsServices = [
  superCalculatorProvider
]
