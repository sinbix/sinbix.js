import * as _ from 'lodash';

export type TBunch<T> = T | T[];

export interface IBunchCallback<T> {
  (bunchEntity: any): any;
}

export function bunchHandler(
  bunch: TBunch<any>,
  callback: IBunchCallback<any>
) {
  if (_.isArray(bunch)) {
    bunch.map((entiry) => {
      callback(entiry);
    });
  } else {
    callback(bunch);
  }
}
