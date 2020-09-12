import * as _ from 'lodash';

export function test(el: any | any[], cb: { (el: any) }) {
  if (_.isArray(el)) {
    el.map((item) => {
      cb(item);
    });
  } else {
    cb(el);
  }
}

export function packagesUtils(): string {
  return 'packages-utils';
}
