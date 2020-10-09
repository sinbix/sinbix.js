import * as _ from 'lodash-es';

export function Debounce(milliseconds = 0, options = {}): any {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const map = new WeakMap();
    const originalMethod = descriptor.value;
    descriptor.value = function (...params) {
      let debounced = map.get(this);
      if (!debounced) {
        debounced = _.debounce(originalMethod, milliseconds, options).bind(
          this
        );
        map.set(this, debounced);
      }
      debounced(...params);
    };
    return descriptor;
  };
}
